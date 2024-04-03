/*
  Warnings:

  - Added the required column `ip` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAgent` to the `Session` table without a default value. This is not possible if the table is not empty.

*/

-- Clear existing data
DELETE FROM "Session";

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "ip" TEXT NOT NULL,
ADD COLUMN     "userAgent" TEXT NOT NULL;
