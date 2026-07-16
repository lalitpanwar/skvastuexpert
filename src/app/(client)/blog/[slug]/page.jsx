import { notFound } from "next/navigation";

import Container from "@/components/client/Layout/Container";

import BlogCategory from "@/components/blog/BlogCategory";
import BlogPostMeta from "@/components/blog/BlogPostMeta";
import BlogFeaturedImage from "@/components/blog/BlogFeaturedImage";
import BlogContent from "@/components/blog/BlogContent";
import AuthorCard from "@/components/blog/AuthorCard";

import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries/POST_QUERY";
import { RELATED_POSTS_QUERY } from "@/sanity/lib/queries/RELATED_POSTS_QUERY";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ShareButtons from "@/components/blog/ShareButtons";
import Breadcrumb from "@/components/client/Shared/Breadcrumb";
import { blogSingleBreadcrumb} from "@/lib/navigation/breadcrumb";
import { generateArticleJsonLd } from "@/lib/seo/jsonLd";
import Script from "next/script";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
    },
  };


}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  console.log("POST DATA", post)
  
  const { data: relatedPosts } = await sanityFetch({
    query: RELATED_POSTS_QUERY,
    params: {
      slug,
      categorySlug: post?.slug, //category reference dal rakhan hai esliye params k slug se hi kaam chal jayega
    }
  });

  if (!post) {
    notFound();
  }
const articleJsonLd = generateArticleJsonLd(post);
  return (
    <>
 {/* //use next/script to escape dangerouslySetInnerHTML    */}
<Script
  id="article-schema"
  type="application/ld+json"
>
  {JSON.stringify(articleJsonLd)}
</Script>
      <article className="py-10 md:py-16">
        <Container>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 md:p-10">
            <BlogCategory category={post.category} />

            <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900">
              {post.title}
            </h1>

            <BlogPostMeta
              updatedAt={post.updatedAt || post.publishedAt}
              author={post.author}
               content={post.content}
            />

            <BlogFeaturedImage image={post.featuredImage} title={post.title} />

            <div className="mt-12 ">
              <BlogContent content={post.content} />
            </div>
<ShareButtons title={post.title} slug={post.slug} />
            <AuthorCard author={post.author} />
          </div>
        </Container>
      </article>

      <RelatedPosts posts={relatedPosts} />

<Breadcrumb items={blogSingleBreadcrumb(post.title)} />
    </>
  );
}
