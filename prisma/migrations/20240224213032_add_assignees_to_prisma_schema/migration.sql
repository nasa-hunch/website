-- CreateTable
CREATE TABLE "ToDoAssignee" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "toDoItemId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ToDoAssignee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToDoAssignee" ADD CONSTRAINT "ToDoAssignee_toDoItemId_fkey" FOREIGN KEY ("toDoItemId") REFERENCES "ToDoItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoAssignee" ADD CONSTRAINT "ToDoAssignee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "ProjectUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
