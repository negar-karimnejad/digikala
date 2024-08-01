/*
  Warnings:

  - You are about to drop the column `features` on the `Product` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Feature_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "en_title" TEXT NOT NULL DEFAULT '',
    "rating" REAL,
    "voter" INTEGER NOT NULL DEFAULT 0,
    "colors" TEXT NOT NULL,
    "sizes" TEXT NOT NULL,
    "images" TEXT,
    "thumbnail" TEXT NOT NULL,
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
INSERT INTO "new_Product" ("categoryId", "colors", "createdAt", "description", "discount", "discount_price", "en_title", "guarantee", "id", "images", "likes", "price", "rating", "recommended_percent", "sellerId", "sizes", "thumbnail", "title", "updatedAt", "voter") SELECT "categoryId", "colors", "createdAt", "description", "discount", "discount_price", "en_title", "guarantee", "id", "images", "likes", "price", "rating", "recommended_percent", "sellerId", "sizes", "thumbnail", "title", "updatedAt", "voter" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
