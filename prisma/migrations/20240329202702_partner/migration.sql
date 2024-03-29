-- CreateTable
CREATE TABLE "Parter" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "logo" VARCHAR(255) NOT NULL,
    "website" VARCHAR(255) NOT NULL,

    CONSTRAINT "Parter_pkey" PRIMARY KEY ("id")
);
