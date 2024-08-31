import { ObjectId } from "mongodb";

export interface RegisterFormState {
  errors: {
    name?: string[];
    email?: string[];
    phone?: string[];
    password?: string[];
    general?: string[];
  };
  success: boolean;
}

export interface LoginFormState {
  errors: {
    email?: string[];
    password?: string[];
    general?: string[];
  };
  success: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface City {
  id: number;
  title: string;
  slug: string;
  province_id: number;
  latitude: number;
  longitude: number;
}
[];

export interface Story {
  _id: string;
  title: string;
  cover: string;
  post: string;
}

export interface Product {
  _id: ObjectId;
  title: string;
  en_title?: string;
  rating?: number;
  voter?: number;
  sizes?: string;
  thumbnail: string;
  price: number;
  discount?: number;
  discount_price?: number;
  description: string;
  recommended_percent?: number;
  guarantee?: string;
  likes?: number;
  comments?: Comment[];
  questions?: Question[];
  features?: Feature[];
  colors?: Color[];
  orders?: Order[];
  images?: ProductImage[];
  category: Category;
  submenuId: string;
  submenuItemId: string;
}
export interface ProductImage {
  _id: ObjectId;
  url: string;
  productId?: ObjectId;
}
export interface Category {
  _id: ObjectId;
  title: string;
  icon?: string;
  cover: string[];
  href: string;
  product?: Product;
  submenus: Submenu[];
}
export interface Submenu {
  _id: ObjectId;
  title: string;
  href: string;
  categoryId?: ObjectId;
  items: SubmenuItem[];
}
export interface SubmenuItem {
  _id: ObjectId;
  title: string;
  href: string;
  submenuId?: ObjectId;
}
export interface Question {
  _id: ObjectId;
  username: string;
  body: string;
  email: string;
  date: Date;
  productId: ObjectId;
}
export interface Feature {
  key: string;
  value: string;
  productId: ObjectId;
}
export interface Color {
  name: string;
  hex: string;
  productId: ObjectId;
}
export interface Order {
  _id: ObjectId;
  totalAmount: number;
  date: Date;
  status: string;
  productId: ObjectId;
  userId: ObjectId;
}
