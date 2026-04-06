/*
  Warnings:

  - You are about to drop the column `uploadedById` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `addedBy` on the `ProductCategory` table. All the data in the column will be lost.
  - Made the column `quantity` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `productId` on table `ProductDescription` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "orderStatus" AS ENUM ('pending', 'processing', 'successful');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_uploadedById_fkey";

-- DropForeignKey
ALTER TABLE "ProductDescription" DROP CONSTRAINT "ProductDescription_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "uploadedById",
ALTER COLUMN "newPrice" DROP NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "categoryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "addedBy";

-- AlterTable
ALTER TABLE "ProductDescription" ALTER COLUMN "productId" SET NOT NULL;

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderId" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "total_price" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderedUserId" TEXT NOT NULL,
    "purchased" BOOLEAN NOT NULL DEFAULT false,
    "total_price" DECIMAL(10,2) NOT NULL,
    "txRef" TEXT,
    "status" "orderStatus",
    "orderedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductInvoice" (
    "id" TEXT NOT NULL,
    "invoiceUserId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "productPrice" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "ProductInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Cart_userId_idx" ON "Cart"("userId");

-- CreateIndex
CREATE INDEX "Cart_orderId_idx" ON "Cart"("orderId");

-- CreateIndex
CREATE INDEX "Cart_productId_idx" ON "Cart"("productId");

-- CreateIndex
CREATE INDEX "Order_orderedUserId_idx" ON "Order"("orderedUserId");

-- CreateIndex
CREATE INDEX "ProductInvoice_invoiceUserId_idx" ON "ProductInvoice"("invoiceUserId");

-- CreateIndex
CREATE INDEX "ProductInvoice_cartId_idx" ON "ProductInvoice"("cartId");

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDescription" ADD CONSTRAINT "ProductDescription_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderedUserId_fkey" FOREIGN KEY ("orderedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInvoice" ADD CONSTRAINT "ProductInvoice_invoiceUserId_fkey" FOREIGN KEY ("invoiceUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInvoice" ADD CONSTRAINT "ProductInvoice_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
