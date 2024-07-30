import { Category, User } from "@prisma/client";

export interface FormState {
  data: User | null;
  errors: Record<string, string[]>;
  success: boolean;
}

export const initialState: FormState = {
  data: null,
  errors: {},
  success: false,
};

export interface CategoryFormState {
  data: Category | null;
  errors: Record<string, string[]>;
  success: boolean;
}

export const categoryInitialState: CategoryFormState = {
  data: null,
  errors: {},
  success: false,
};
