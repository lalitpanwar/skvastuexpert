import { groq } from "next-sanity";
export const POSTS_COUNT_QUERY = groq`
count(*[_type=="post"])
`;