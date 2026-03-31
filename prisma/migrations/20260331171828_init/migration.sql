-- CreateEnum
CREATE TYPE "genderStatus" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "maritalStatus" AS ENUM ('single', 'married', 'divorced', 'other');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin', 'staff', 'agent', 'lender');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "phone_number" TEXT,
    "gender" "genderStatus",
    "marital_status" "maritalStatus",
    "role" "Role" NOT NULL DEFAULT 'user',
    "active" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");
