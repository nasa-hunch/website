/*
  Warnings:

  - You are about to drop the column `projectid` on the `File` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `link` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProjectUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_projectid_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "projectid",
ADD COLUMN     "link" VARCHAR(255) NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProjectUser" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
