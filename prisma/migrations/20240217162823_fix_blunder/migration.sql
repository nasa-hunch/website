/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- DropIndex
DROP INDEX "Project_ownerId_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "ProjectUser" ADD COLUMN     "owner" BOOLEAN NOT NULL DEFAULT false;
