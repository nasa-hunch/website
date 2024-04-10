-- CreateTable
CREATE TABLE "Invite" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fromId" INTEGER NOT NULL,
    "role" "Role" NOT NULL,
    "form" TEXT NOT NULL,
    "toId" INTEGER NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
