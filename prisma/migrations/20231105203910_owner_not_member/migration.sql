/*
  Warnings:

  - The values [OWNER] on the enum `ProjectUserPermission` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectUserPermission_new" AS ENUM ('EDITOR', 'VIEWER');
ALTER TABLE "ProjectUser" ALTER COLUMN "permission" TYPE "ProjectUserPermission_new" USING ("permission"::text::"ProjectUserPermission_new");
ALTER TYPE "ProjectUserPermission" RENAME TO "ProjectUserPermission_old";
ALTER TYPE "ProjectUserPermission_new" RENAME TO "ProjectUserPermission";
DROP TYPE "ProjectUserPermission_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
