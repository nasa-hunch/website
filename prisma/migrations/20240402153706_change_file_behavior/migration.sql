/*
  Warnings:

  - You are about to drop the column `projectId` on the `File` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_projectId_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "ProjectFile" (
    "projectId" INTEGER NOT NULL,
    "fileId" INTEGER NOT NULL,

    CONSTRAINT "ProjectFile_pkey" PRIMARY KEY ("projectId","fileId")
);

-- CreateTable
CREATE TABLE "ProjectTemplateFile" (
    "templateId" INTEGER NOT NULL,
    "fileId" INTEGER NOT NULL,

    CONSTRAINT "ProjectTemplateFile_pkey" PRIMARY KEY ("templateId","fileId")
);

-- AddForeignKey
ALTER TABLE "ProjectFile" ADD CONSTRAINT "ProjectFile_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectFile" ADD CONSTRAINT "ProjectFile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTemplateFile" ADD CONSTRAINT "ProjectTemplateFile_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "ProjectTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTemplateFile" ADD CONSTRAINT "ProjectTemplateFile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;
