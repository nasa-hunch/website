-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_orgId_fkey";

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "orgId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
