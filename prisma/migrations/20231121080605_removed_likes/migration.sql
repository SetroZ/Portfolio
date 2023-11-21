/*
  Warnings:

  - You are about to drop the column `likes` on the `Article` table. All the data in the column will be lost.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `likes` on the `Comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "likes";

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "likes",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("id");
