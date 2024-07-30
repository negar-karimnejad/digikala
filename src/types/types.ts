import { Category, User } from "@prisma/client";
import { StaticImageData } from "next/image";

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

export interface FooterLinksProps {
  id: number;
  title: string;
  links: LinkItemProps[];
}
[];

export interface LinkItemProps {
  id: number;
  title: string | JSX.Element;
  href: string;
}

export interface Story {
  id: number;
  title: string;
  cover: string | StaticImageData;
  post: string | StaticImageData;
}

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
