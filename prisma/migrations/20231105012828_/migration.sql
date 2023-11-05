/*
  Warnings:

  - You are about to drop the column `orgid` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectid` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `userid` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `orgid` on the `User` table. All the data in the column will be lost.
  - Added the required column `orgId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `ProjectUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ProjectUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_orgid_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUser" DROP CONSTRAINT "ProjectUser_projectid_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUser" DROP CONSTRAINT "ProjectUser_userid_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_orgid_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "orgid",
ADD COLUMN     "orgId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProjectUser" DROP COLUMN "projectid",
DROP COLUMN "userid",
ADD COLUMN     "projectId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "orgid",
ADD COLUMN     "orgId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectUser" ADD CONSTRAINT "ProjectUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectUser" ADD CONSTRAINT "ProjectUser_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
