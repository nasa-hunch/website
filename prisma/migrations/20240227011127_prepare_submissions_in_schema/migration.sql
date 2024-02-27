-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "submissionDate" TIMESTAMP(3),
ADD COLUMN     "submitted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ProjectUser" ADD COLUMN     "voteSubmit" BOOLEAN NOT NULL DEFAULT false;
