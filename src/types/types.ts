export interface FormState {
  name: string;
  email: string;
  password: string;
  errors: { [key: string]: string[] };
}

export const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  errors: {},
};
