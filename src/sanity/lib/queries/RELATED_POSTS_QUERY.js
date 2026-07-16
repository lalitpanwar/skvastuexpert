import { groq } from "next-sanity";

export const RELATED_POSTS_QUERY = groq`
*[
  _type == "post" &&
  slug.current != $slug &&
  category._ref == *[
    _type == "post" &&
    slug.current == $slug
  ][0].category._ref
][0...3]{

  _id,

  title,

  "slug": slug.current,

  excerpt,

  publishedAt,

  featuredImage{
    asset->{
      url
    },
    alt
  },

  category->{
    title
  }

}
`;