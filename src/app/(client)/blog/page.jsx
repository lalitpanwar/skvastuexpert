import { sanityFetch } from "@/sanity/lib/live";
import { PAGINATED_POSTS_QUERY } from "@/sanity/lib/queries/PAGINATED_POSTS_QUERY";
import { POSTS_COUNT_QUERY } from "@/sanity/lib/queries/POSTS_COUNT_QUERY";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import BlogHero from "@/components/blog/BlogHero";
import { SectionLayout } from "@/components/client/Layout";
import Breadcrumb from "@/components/client/Shared/Breadcrumb";
import { blogBreadcrumb } from "@/lib/navigation/breadcrumb";
import JsonLd from "@/components/client/Shared/JsonLd";
import { webpageSchema, breadcrumbSchema } from "@/lib/schema";
import { getSiteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createMetadata({
    fallbackTitle: "Blog - Vastu, Astrology articles and expert guidance",

    fallbackDescription:
      "Latest Vastu articles, tips and expert guidance.",

    path: "/blog",
  });
}

const POSTS_PER_PAGE = 9;

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;

  const currentPage = Number(params?.page || 1);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [{ data: posts }, { data: totalPosts }] = await Promise.all([
    sanityFetch({
      query: PAGINATED_POSTS_QUERY,
      params: { start, end },
    }),
    sanityFetch({
      query: POSTS_COUNT_QUERY,
    }),
  ]);
console.log("BLOG_PAGE", posts)
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const site = getSiteConfig();
  return (
    <>

    <JsonLd
  data={[
    webpageSchema({
          site,
            title: "Blog - Vastu, Astrology articles and expert guidance",

    description:
      "Latest Vastu articles, tips and expert guidance.",

    path: "/blog",
    }),
    breadcrumbSchema(site, blogBreadcrumb()),
  ]}
/>
      <BlogHero />

    <SectionLayout>

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
  {posts.map((post) => (
    <BlogCard key={post._id} post={post} />
  ))}
</div>


        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />



          </SectionLayout>
<Breadcrumb items={blogBreadcrumb()} />

    </>
  );
}

