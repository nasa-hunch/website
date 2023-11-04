/*
  Warnings:

  - A unique constraint covering the columns `[joinCode]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `joinCode` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "joinCode" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_joinCode_key" ON "Project"("joinCode");
