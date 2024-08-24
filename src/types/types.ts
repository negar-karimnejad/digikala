// import {
//   Category,
//   Colors,
//   Comment,
//   Feature,
//   Image,
//   Product,
//   Question,
// } from "@prisma/client";
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

// export interface CategoryFormState {
//   data: Category | null;
//   errors: Record<string, string[]>;
//   success: boolean;
// }

// export const categoryInitialState: CategoryFormState = {
//   data: null,
//   errors: {},
//   success: false,
// };

// export interface SubmenuItemProps {
//   id: number;
//   title: string;
//   href: string;
//   submenuId: number;
// }

// export interface SubmenuProps {
//   id: number;
//   title: string;
//   href: string;
//   categoryId: number;
//   items: SubmenuItemProps[];
// }

// export interface CategoryProps {
//   id: number;
//   title: string;
//   icon: string;
//   cover: string;
//   href: string;
//   submenus?: SubmenuProps[];
// }

// export interface ProductProps extends Product {
//   image?: Image[];
//   category?: CategoryProps;
//   color?: Colors[];
//   feature?: Feature[];
//   comment?: Comment[];
//   question?: Question[];
// }
