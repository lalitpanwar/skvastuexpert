import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import { seoType } from "./seo";
import { settingsType } from "./settings";

export const schema = {
  types: [
    postType,
    categoryType,
    authorType,
    blockContentType,
    seoType,
    settingsType
  ],
};