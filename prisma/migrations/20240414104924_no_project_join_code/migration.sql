/*
  Warnings:

  - You are about to drop the column `joinCode` on the `Project` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Project_joinCode_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "joinCode";
