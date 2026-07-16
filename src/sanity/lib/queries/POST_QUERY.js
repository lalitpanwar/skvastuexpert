import { groq } from "next-sanity";
export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  content,

  featuredImage{
    asset->{
      url
    },
    alt
  },

  category->{
  _id,
    title,
    "slug": slug.current
  },

  author->{
    name,
    designation,
    bio,
    photo,
    website,
    facebook,
    instagram,
    linkedin
  },

  seo
}
`;