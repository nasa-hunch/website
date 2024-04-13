import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createId } from '@paralleldrive/cuid2';
import { Prisma } from '@prisma/client';
import frontMatter from 'front-matter';
import showdown from 'showdown';
import { z } from 'zod';

import { PrismaTransactionClient } from './returnType';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
const MONTH = 1000 * 60 * 60 * 24 * 30;

const deadline = (minMonths = 3, maxMonths = 5) =>
	new Date(Date.now() + random(minMonths * MONTH, maxMonths * MONTH));

const categories: Omit<Prisma.CategoryCreateInput, 'icon' | 'deadline'>[] = [
	{
		color: 'ff0000',
		name: 'Design & Prototype',
		banner: "https://nasahunch.com/images/design.jpg",
		slug: "design"
	},
	{
		color: '3F88C5',
		name: 'Software',
		banner: "https://nasahunch.com/images/software.jpg",
		slug: "software"
	},
	{
		color: 'E94F37',
		name: 'Hardware',
		banner: "https://nasahunch.com/images/hardware.jpg",
		slug: "hardware"
	},
	{
		color: '44BBA4',
		name: 'Sewn Flight Articles',
		banner: "https://nasahunch.com/images/softgoods.jpg",
		slug: "softgoods"
	},
	{
		color: 'FFF275',
		name: 'Video & Media',
		banner: "https://nasahunch.com/images/video.png",
		slug: "video"
	},
	{
		color: 'FED18C',
		name: 'Culinary',
		banner: "https://nasahunch.com/images/culinary.jpg",
		slug: "culinary"
	},
	{
		color: '80DED9',
		name: 'Biomedical Science',
		banner: "https://nasahunch.com/images/biomed-program-card-image.jpg",
		slug: "biomed"
	},
	{
		color: 'F1C8DB',
		name: 'Flight Configuration',
		banner: "https://nasahunch.com/images/flight-configuration-card-image.jpg",
		slug: "flight-configuration"
	}
];

const attributesSchema = z.object({
	name: z.string(),
	category: z.array(z.string()),
	shortDescription: z.string()
});

export async function seed(prisma: PrismaTransactionClient) {
	console.log('Seeding categories...');

	await prisma.category.createMany({
		data: categories.map((category) => ({
			...category,
			deadline: deadline()
		}))
	});

	const converter = new showdown.Converter();

	const currentDirectory = fileURLToPath(new URL('.', import.meta.url));

	const files = await fs.readdir(path.normalize(path.join(currentDirectory, 'projects')));
	const transformedFiles = await Promise.all(
		files.map(async (file) => {
			const content = await fs.readFile(
				path.normalize(path.join(currentDirectory, 'projects', file)),
				'utf-8'
			);
			const { attributes, body } = frontMatter(content);
			const html = converter.makeHtml(body);
			const { name, category, shortDescription } = attributesSchema.parse(attributes);
			return { html, name, categories: category, shortDescription };
		})
	);

	const templateIds: string[] = [];
	for (const { html, name, categories, shortDescription } of transformedFiles) {
		const categoriesInDatabase = await prisma.category.findMany({
			where: {
				name: {
					in: categories
				}
			}
		});

		if (categoriesInDatabase.length !== categories.length) {
			throw new Error(`Category ${categories.join(', ')} not found`);
		}

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
