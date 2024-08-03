/*
  Warnings:

  - You are about to drop the `_ProductOrders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to alter the column `likes` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `rating` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- DropIndex
DROP INDEX "_ProductOrders_B_index";

-- DropIndex
DROP INDEX "_ProductOrders_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductOrders";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalAmount" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "productId" INTEGER,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "id", "orderDate", "status", "totalAmount", "updatedAt", "userId") SELECT "createdAt", "id", "orderDate", "status", "totalAmount", "updatedAt", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
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
    "likes" REAL NOT NULL DEFAULT 0,
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
