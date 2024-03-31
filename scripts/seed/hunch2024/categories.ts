import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
const MONTH = 1000 * 60 * 60 * 24 * 30;

const deadline = (minMonths = 3, maxMonths = 5) =>
	new Date(Date.now() + random(minMonths * MONTH, maxMonths * MONTH));
const block = (text: string) => text.replace(/^\s+/gm, '').replaceAll(/\n\s+/g, '\n');

const categories: Omit<Prisma.CategoryCreateInput, 'icon' | 'deadline'>[] = [
	{
		color: 'ff0000',
		name: 'Design & Prototype',
	},
	{
		color: '3F88C5',
		name: 'Software',
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
		name: 'Culinary',
	},
	{
		color: '80DED9',
		name: 'Biomedical Science',
	},
	{
		color: 'F1C8DB',
		name: 'Flight Configuration',
	}
];

export async function main(client: PrismaClient) {
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

	console.log('Categories seeded');
}
