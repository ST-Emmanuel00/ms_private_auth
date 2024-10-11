/*
  Warnings:

  - Added the required column `privilege` to the `Permissions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Privilege" AS ENUM ('GET', 'POST', 'PUT', 'DELETE');

-- AlterTable
ALTER TABLE "Permissions" ADD COLUMN     "privilege" "Privilege" NOT NULL;
