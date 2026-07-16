export function calculateReadingTime(content) {
  if (!content) return "1 min read";

  let text = "";

  content.forEach((block) => {
    if (block._type === "block") {
      text += block.children?.map((child) => child.text).join(" ") + " ";
    }
  });

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}