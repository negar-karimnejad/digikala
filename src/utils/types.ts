import { ObjectId } from "mongodb";

export interface Address {
  province?: string;
  city?: string;
  street?: string;
  plate?: string;
  unit?: string;
  postalcode?: string;
}

export interface User {
  _id: ObjectId;
  name: string;
  avatar?: string;
  email: string;
  phone: string;
  password: string;
  address?: Address;
  idNumber?: string;
  job?: string;
  role: "USER" | "ADMIN";
}

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
  hero: string[];
  banner: string[];
  href: string;
  description?: string;
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
export interface Article {
  _id: ObjectId;
  title: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  source: string;
  readingTime: string;
  cover: string;
  categoryId?: ObjectId;
}

export interface CartItem {
  _id: ObjectId;
  title: string;
  thumbnail: string;
  guarantee: string;
  price: number;
  discount_price: number;
  discount: number;
  count: number;
}

export interface ShippingFormState {
  errors: {
    address?: string[];
    plate?: string[];
    street?: string[];
    postalcode?: string[];
    name?: string[];
    phone?: string[];
    general?: string[];
  };
  success: boolean;
}
