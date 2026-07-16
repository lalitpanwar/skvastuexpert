import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "./PortableTextComponents";

export default function BlogContent({ content }) {
  return (
    <div className="prose prose-lg max-w-none">

      <PortableText
        value={content}
        components={portableTextComponents}
      />

    </div>
  );
}