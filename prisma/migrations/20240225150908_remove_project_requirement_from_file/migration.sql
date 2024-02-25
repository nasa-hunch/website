-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_projectId_fkey";

-- AlterTable
ALTER TABLE "File" ALTER COLUMN "projectId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
