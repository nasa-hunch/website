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
					description: block(`The objective of this project is to create a Next Generation
                    WEB Site for NASA HUNCH that addresses the challenges faced by users while
                    accessing multiple websites for different purposes. The goal is to create a seamless
                    user experience by combining multiple existing websites into a single platform that
                    offers personalized content, intuitive navigation, and visually appealing graphics.`),
					deadline: deadline()
				},
                {
                    name: `Lunar, Mars, and Space Station Facility Environmental Control and Sensor Alarm System`,
                    description: block(`Our Off-Plant Smart Building Software Controller provides
                    a complete solution for managing and controlling the environment in a 2 - 3
                    room smart building, off-planet. It features a comprehensive Control System,
                    software, and sensors, compatible with Windows, Linux, PC, Arduino, and
                    Rasberry Pie. This software provides an efficient and reliable way to monitor,
                    adjust, and control the environment of space exploration.
                    With our Off-Plant Smart Building Software Controller, you can rest assured
                    that your space exploration is in safe and capable hands.`),
                    deadline: deadline()
                },
                {
                    name: `Defending the Smart Lunar Building: Cyber Security for Control Systems`,
                    description: block(`As we embark on a new era of space exploration,
                    the need for cyber security in smart lunar buildings, space stations,
                    satellites, and other space-bound structures increases.`),
                    deadline: deadline()
                },
                {
                    name: `Personal Astronaut Assistant in Space`,
                    description: block(`NASA HUNCH Software is on a mission to explore the boundaries
                    of space and create an innovative system to help astronauts in their daily
                    operations. To achieve this, we have developed a portable Personal Astronaut
                    Assistant that is equipped with task support, health monitoring, companionship,
                    lab assistant, and entertainment functions. By combining cutting-edge technology
                    with our passion for space exploration, we’re creating a system that will revolutionize
                    the way astronauts work and live in space.`),
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
		name: 'Culinary',
        projectTemplates: {
            create: [
                {
                    name: 'Savory Breakfast Item that includes a Vegetable',
                    description: block(`Create a savory breakfast item that includes a
                    vegetable.`),
                    deadline: deadline()
                }
            ]
        }
	},
	{
		color: '80DED9',
		name: 'Biomedical Science',
        projectTemplates: {
            create: [
                {
                    name: 'Biofilms and Keeping Water Clean',
                    description: block(`Microbial growth, biofilm formation, stress response,
                    and pathogenicity are affected by microgravity. Increased resistance to
                    antibiotics in bacteria isolated from the ISS has often been reported.
                    Enterococcus faecalis and Staphylococcus spp. isolates from the ISS have
                    been shown to harbor plasmid-encoded transfer genes.`),
                    deadline: deadline()
                }
            ]
        }
	},
	{
		color: 'F1C8DB',
		name: 'Flight Configuration',
        projectTemplates: {
            create: [
                {
                    name: 'Cardboard School - Lunar Lander',
                    description: block(`Cardboard School designed a lunar lander that
                    NASA HUNCH will use to test the feasibility of landing on the Moon.
                    This team has been working on this project for the past year,
                    but is no longer able to continue. NASA HUNCH is looking for a
                    team to take over the project and complete the lunar lander.`),
                    deadline: deadline()
                }
            ]
        }
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
