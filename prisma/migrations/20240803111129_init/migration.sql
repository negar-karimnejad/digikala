/*
  Warnings:

  - You are about to drop the `Seller` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `sellerId` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Seller_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Seller";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "en_title" TEXT NOT NULL DEFAULT '',
    "rating" REAL,
    "voter" INTEGER NOT NULL DEFAULT 0,
    "sizes" TEXT NOT NULL,
    "images" TEXT,
    "thumbnail" TEXT NOT NULL,
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
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "createdAt", "description", "discount", "discount_price", "en_title", "guarantee", "id", "images", "likes", "price", "rating", "recommended_percent", "sizes", "thumbnail", "title", "updatedAt", "voter") SELECT "categoryId", "createdAt", "description", "discount", "discount_price", "en_title", "guarantee", "id", "images", "likes", "price", "rating", "recommended_percent", "sizes", "thumbnail", "title", "updatedAt", "voter" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
