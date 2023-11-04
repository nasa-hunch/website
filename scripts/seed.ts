import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const org = await prisma.organization.findFirst({ where: { id: 0 } });

    if (org && org.name != "Cardboard") {
        throw new Error("Organization with id 0 already exists and is not Cardboard. Are you sure this is the right database?");
    }

    await prisma.organization.upsert({
        where: { id: 0, name: "Cardboard" },
        update: {},
        create: {
            name: 'Cardboard',
        }
    })
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
