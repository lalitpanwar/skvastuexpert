import { groq } from "next-sanity";
export const PAGINATED_POSTS_QUERY = groq`
*[_type == "post"]
| order(publishedAt desc)
[$start...$end]{

  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,

  featuredImage{
    asset->{url},
    alt
  },

  category->{
    title,
    "slug": slug.current
  }
}
`;