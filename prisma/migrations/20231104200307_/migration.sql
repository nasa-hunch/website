/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'UNVERIFIED_TEACHER', 'TEACHER', 'SCHOOL_ADMIN', 'HUNCH_ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role";
