import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,

  featuredImage{
    asset->{
      _id,
      url
    },
    alt
  },

  category->{
    title,
    "slug": slug.current
  },

  author->{
    name,
    photo
  }
}
`;