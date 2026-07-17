import { ROUTES } from "./routes";


export const aboutBreadcrumb = () => [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "About",
  },
];
export const contactBreadcrumb = () => [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "Contact",
  },
];

export const blogBreadcrumb = () => [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "Blog",
  },

];

export const blogSingleBreadcrumb = (title) => [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG,
  },
  {
    label: title,
  },
];

export const categoryBreadcrumb = (title) => [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG,
  },
  {
    label: title,
  },
];

export const authorBreadcrumb = (name) => [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG,
  },
  {
    label: name,
  },
];