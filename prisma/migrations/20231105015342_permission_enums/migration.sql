/*
  Warnings:

  - You are about to drop the column `permissions` on the `ProjectUser` table. All the data in the column will be lost.
  - Added the required column `permission` to the `ProjectUser` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProjectUserPermission" AS ENUM ('OWNER', 'EDITOR', 'VIEWER');

-- AlterTable
ALTER TABLE "ProjectUser" DROP COLUMN "permissions",
ADD COLUMN     "permission" "ProjectUserPermission" NOT NULL;
