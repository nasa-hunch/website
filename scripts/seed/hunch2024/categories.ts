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
		projectTemplates: {
			create: [
				{
					name: 'Multi-Tool Badge Holder',
					description: block(`Everybody at NASA and lots of other people have
                    to wear identification badges. They are worn
                    whenever at work but also lots of times when not
                    on site or not at work but still doing our jobs.
                    Since it is always on your person, why not make it
                    hold something or somethings that you often
                    need to do your job but don’t always carry
                    (forgetfulness)?`),
					deadline: deadline()
				},
				{
					name: 'Lunar Art',
					description: block(`You are to create a work of art that inspires an
                    astronaut to create their own art while they are on
                    the Moon`),
					deadline: deadline()
				},
				{
					name: 'VR Lunar Habitat',
					description:
						block(`Develop a Virtual Reality, multi-room, lunar habitat that allows viewers to
                    see the dirt covered outside and the inside of the habitat with its
                    assortment of equipment and supplies. This will help engineers and
                    astronauts visualize the kind of work that needs to be done for this future
                    living space.`),
					deadline: deadline()
				}
			]
		}
	},
	{
		color: '3F88C5',
		name: 'Software',
		projectTemplates: {
			create: [
				{
					name: 'Cosmic Calendars: Navigating Time Zones and Communication Delays Across the Solar System',
					description: block(`How do we Schedule Events, Meetings, and Experiments,
                    when we have to work with scheduling across different celestial bodies presents significant
                    challenges due to differences in time zones, calendars, and day lengths
                    `),
					deadline: deadline()
				},
				{
					name: `Creating a Next-Generation Website`,
					description: `The objective of this project is to create a Next Generation
                    WEB Site for NASA HUNCH that addresses the challenges faced by users while
                    accessing multiple websites for different purposes. The goal is to create a seamless
                    user experience by combining multiple existing websites into a single platform that
                    offers personalized content, intuitive navigation, and visually appealing graphics.`,
					deadline: deadline()
				}
			]
		}
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
