import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-10">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ""}
          width={1200}
          height={700}
          className="rounded-xl"
        />
      </div>
    ),
  },

  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-5 text-3xl font-bold">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-2xl font-semibold">
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="mb-6 leading-8 font-normal text-lg text-gray-700">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-primary pl-6 italic">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const blank = value?.openInNewTab;

      return (
        <Link
          href={value.href}
          target={blank ? "_blank" : "_self"}
          className="text-primary underline"
        >
          {children}
        </Link>
      );
    },
  },
};