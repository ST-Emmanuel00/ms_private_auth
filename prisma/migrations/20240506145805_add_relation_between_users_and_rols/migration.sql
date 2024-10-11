/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Rols` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roleId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Rols_name_key" ON "Rols"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Rols"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
