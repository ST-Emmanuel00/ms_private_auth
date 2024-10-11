/*
  Warnings:

  - A unique constraint covering the columns `[docNumber]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `docNumber` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `docType` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "docNumber" TEXT NOT NULL,
ADD COLUMN     "docType" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_docNumber_key" ON "Users"("docNumber");
