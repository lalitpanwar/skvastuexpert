import BlogCard from "./BlogCard";
import { SectionLayout } from "@/components/client/Layout";

export default function RelatedPosts({ posts }) {
  if (!posts?.length) return null;

  return (
    <SectionLayout
      title="Related Articles"
      subtitle="You may also like these articles."
      seeMore={false}
      className="mt-5 pt-2"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </SectionLayout>
  );
}