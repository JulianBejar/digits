-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "owner" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
