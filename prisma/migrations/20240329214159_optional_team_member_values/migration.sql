-- AlterTable
ALTER TABLE "Partner" RENAME CONSTRAINT "Parter_pkey" TO "Partner_pkey";

-- AlterTable
ALTER TABLE "TeamMember" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
