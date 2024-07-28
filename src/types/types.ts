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
