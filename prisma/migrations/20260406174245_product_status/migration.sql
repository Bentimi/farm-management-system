/*
  Warnings:

  - The `approved` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "productStatus" AS ENUM ('approved', 'pending', 'rejected', 'review');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "approved",
ADD COLUMN     "approved" "productStatus" NOT NULL DEFAULT 'pending';
