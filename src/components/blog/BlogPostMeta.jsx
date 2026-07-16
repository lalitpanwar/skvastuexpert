import { formatDate } from "@/lib/utils/formatDate";
import { CalendarDays, User } from "lucide-react";
import ReadingTime from "./ReadingTime";

export default function BlogPostMeta({
  updatedAt,
  author,
  content,
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">

      <div className="flex items-center gap-2">
        <CalendarDays size={16} />
        <span>
          Last Updated :
          {" "}
        {formatDate(updatedAt)}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <User size={16} />
        <span>
          {author?.name}
        </span>
      </div>
<ReadingTime content={content} />

    </div>
  );
}