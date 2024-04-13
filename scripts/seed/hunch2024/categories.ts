import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createId } from '@paralleldrive/cuid2';
import frontMatter from 'front-matter';
import showdown from 'showdown';
import { z } from 'zod';

import { PrismaTransactionClient } from './returnType';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
const MONTH = 1000 * 60 * 60 * 24 * 30;

const deadline = (minMonths = 3, maxMonths = 5) =>
	new Date(Date.now() + random(minMonths * MONTH, maxMonths * MONTH));

const attributesSchema = z.object({
	name: z.string(),
	category: z.array(z.string()),
	shortDescription: z.string()
});

const categoryAttributesSchema = z.object({
	name: z.string(),
	color: z.string().length(6),
	banner: z.string().url()
})

async function generateData<T extends z.ZodRawShape>(directory: string, schema: z.ZodObject<T>) {
	const converter = new showdown.Converter();

	const currentDirectory = fileURLToPath(new URL('.', import.meta.url));

	const files = await fs.readdir(path.normalize(path.join(currentDirectory, directory)));
	return await Promise.all(
		files.map(async (file) => {
			const content = await fs.readFile(
				path.normalize(path.join(currentDirectory, directory, file)),
				'utf-8'
			);
			const { attributes, body } = frontMatter(content);
			const html = converter.makeHtml(body);
			const parsedAttributes = schema.parse(attributes);
			return { 
				html,
				fileName: path.basename(file, path.extname(file)),
				...parsedAttributes
			};
		})
	);
}

export async function seed(prisma: PrismaTransactionClient) {
	console.log('Seeding categories...');

	const transformedCategoryFiles = await generateData('categories', categoryAttributesSchema);
	await prisma.category.createMany({
		data: transformedCategoryFiles.map((category) => ({
			name: category.name,
			color: category.color,
			banner: category.banner,
			description: category.html,
			slug: category.fileName,
			deadline: deadline()
		}))
	});


	const templateIds: string[] = [];
	const transformedTemplateFiles = await generateData('projects', attributesSchema);
	for (const { html, name, category, shortDescription } of transformedTemplateFiles) {
		const categoriesInDatabase = await prisma.category.findMany({
			where: {
				name: {
					in: category
				}
			}
		});

		const currentId = createId();
		await prisma.projectTemplate.create({
			data: {
				id: currentId,
				name,
				category: {
					connect: [
						...categoriesInDatabase.map((category) => ({
							id: category.id
						}))
					]
				},
				deadline: deadline(),
				description: html,
				shortDescription
			}
		});
		templateIds.push(currentId);
	}

	console.log('Categories seeded');

	return templateIds;
}
