import { ROUTES } from "./routes";

export const blogBreadcrumb = (title) => [
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