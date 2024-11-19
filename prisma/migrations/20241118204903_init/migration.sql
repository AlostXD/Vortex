/*
  Warnings:

  - You are about to drop the column `userdiscordmame` on the `Pontos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pontos" DROP COLUMN "userdiscordmame",
ADD COLUMN     "userdiscordname" TEXT;
