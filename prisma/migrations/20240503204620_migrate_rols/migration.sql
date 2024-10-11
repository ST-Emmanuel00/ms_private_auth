/*
  Warnings:

  - Added the required column `description` to the `Rols` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Rols` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rols" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;
