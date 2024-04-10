import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
		name: 'Design & Prototype'
	},
	{
		color: '3F88C5',
		name: 'Software'
	},
	{
		color: 'E94F37',
		name: 'Hardware'
	},
	{
		color: '44BBA4',
		name: 'Sewn Flight Articles'
	},
	{
		color: 'FFF275',
		name: 'Video & Media'
	},
	{
		color: 'FED18C',
		name: 'Culinary'
	},
	{
		color: '80DED9',
		name: 'Biomedical Science'
	},
	{
		color: 'F1C8DB',
		name: 'Flight Configuration'
	}
];

const attributesSchema = z.object({
	name: z.string(),
	category: z.array(z.string()),
	shortDescription: z.string()
});

export async function seed(client: PrismaTransactionClient) {
	console.log('Seeding categories...');

	for (const category of categories) {
		await client.category.create({
			data: {
				...category,
				icon: 'no',
				deadline: new Date(Date.now() + random(3 * MONTH, 5 * MONTH))
			}
		});
	}

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

	for (const { html, name, categories, shortDescription } of transformedFiles) {
		const categoriesInDatabase = await client.category.findMany({
			where: {
				name: {
					in: categories
				}
			}
		});

		if (categoriesInDatabase.length !== categories.length) {
			throw new Error(`Category ${categories.join(', ')} not found`);
		}

		await client.projectTemplate.create({
			data: {
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
	}

	console.log('Categories seeded');
}
