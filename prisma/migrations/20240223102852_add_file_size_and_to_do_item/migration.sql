-- AlterTable
ALTER TABLE "File" ADD COLUMN     "size" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ToDoItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "projectId" INTEGER NOT NULL,
    "checkedById" INTEGER,

    CONSTRAINT "ToDoItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToDoItem" ADD CONSTRAINT "ToDoItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoItem" ADD CONSTRAINT "ToDoItem_checkedById_fkey" FOREIGN KEY ("checkedById") REFERENCES "ProjectUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
