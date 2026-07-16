import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function BlogFeaturedImage({
  image,
  title,
}) {
  if (!image) return null;

  return (
    <div className="mt-10">

      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">

        <Image
          src={urlFor(image).width(1600).height(900).url()}
          alt={image.alt || title}
          fill
          priority
          className="object-cover"
        />

      </div>

      {image.caption && (
        <p className="mt-3 text-center text-sm italic text-slate-500">
          {image.caption}
        </p>
      )}

    </div>
  );
}