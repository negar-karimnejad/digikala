/*
  Warnings:

  - You are about to drop the `Color` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Size` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `cover` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `href` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colors` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `features` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizes` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ProductCategories_B_index";

-- DropIndex
DROP INDEX "_ProductCategories_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Color";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Feature";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Image";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Size";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductCategories";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Submenu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Submenu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubmenuItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "submenuId" INTEGER NOT NULL,
    CONSTRAINT "SubmenuItem_submenuId_fkey" FOREIGN KEY ("submenuId") REFERENCES "Submenu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "icon" TEXT,
    "cover" TEXT NOT NULL,
    "href" TEXT NOT NULL
);
INSERT INTO "new_Category" ("id") SELECT "id" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "en_title" TEXT NOT NULL DEFAULT '',
    "rating" REAL,
    "voter" INTEGER NOT NULL DEFAULT 0,
    "colors" TEXT NOT NULL,
    "sizes" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "sellerId" INTEGER NOT NULL DEFAULT 1,
    "price" REAL NOT NULL,
    "discount" REAL,
    "discount_price" REAL,
    "description" TEXT NOT NULL,
    "recommended_percent" REAL,
    "guarantee" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoryId" INTEGER,
    CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("createdAt", "description", "discount", "discount_price", "en_title", "guarantee", "id", "likes", "price", "rating", "recommended_percent", "sellerId", "thumbnail", "title", "updatedAt", "voter") SELECT "createdAt", "description", "discount", "discount_price", "en_title", "guarantee", "id", "likes", "price", "rating", "recommended_percent", "sellerId", "thumbnail", "title", "updatedAt", "voter" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
