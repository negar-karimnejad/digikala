import { Product } from "@prisma/client";

export interface FormState {
  name: string;
  email: string;
  password: string;
  errors: Record<string, string[]>;
  success: boolean;
}

export const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  errors: {},
  success: false,
};

// export interface ProductFormState {
//   product: Product;
//   errors: Record<string, string[]>;
//   success: boolean;
// }

// export const productInitialState: Product = {
//   title: "",
//   en_title: "",
//   rating: 0,
//   voter: 0,
//   colors: [],
//   sizes: [],
//   images: "",
//   thumbnail: "",
//   features: [],
//   seller: "",
//   price: 0,
//   discount: 0,
//   discount_price: 0,
//   description: "",
//   recommended_percent: 0,
//   guarantee: "",
//   likes: 0,
//   categories: [],
//   errors: {},
//   success: false,
// };
