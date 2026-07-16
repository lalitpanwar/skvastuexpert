export default function BlogCategory({ category }) {
  if (!category) return null;

  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
      {category.title}
    </span>
  );
}