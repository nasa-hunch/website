-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "description" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "pfp" TEXT NOT NULL,
    "phone" VARCHAR(255) NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTeamMember" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTeamMember_AB_unique" ON "_ProjectToTeamMember"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTeamMember_B_index" ON "_ProjectToTeamMember"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTeamMember" ADD CONSTRAINT "_ProjectToTeamMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTeamMember" ADD CONSTRAINT "_ProjectToTeamMember_B_fkey" FOREIGN KEY ("B") REFERENCES "TeamMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;
