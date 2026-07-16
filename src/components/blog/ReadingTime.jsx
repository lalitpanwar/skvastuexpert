import { Clock3 } from "lucide-react";

export default function ReadingTime({ content }) {
  if (!content) return null;

  let text = "";

  content.forEach((block) => {
    if (block._type === "block") {
      text += block.children?.map((child) => child.text).join(" ") + " ";
    }
  });

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500">
      <Clock3 size={16} />
      <span>{minutes} min read</span>
    </div>
  );
}