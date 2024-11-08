/*
  Warnings:

  - Made the column `image` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `owner` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "owner" SET NOT NULL;
