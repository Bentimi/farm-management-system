-- AlterEnum
ALTER TYPE "orderStatus" ADD VALUE 'failed';

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "checked" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'pending';
