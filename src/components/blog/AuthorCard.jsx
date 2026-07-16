import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

export default function AuthorCard({ author }) {
  if (!author) return null;

  return (
    <>
    <div className="mt-14 h-px bg-slate-300" />
    <section className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">

        {/* PHOTO */}

        <div className="relative h-38 w-38 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg">

          {author.photo && (
            <Image
              src={urlFor(author.photo).width(300).height(300).url()}
              alt={author.name}
              fill
              className="object-cover"
            />
          )}

        </div>

        {/* CONTENT */}

        <div className="flex-1">

          <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Written By
          </span>

          <h3 className="mt-2 text-2xl font-bold">
            {author.name}
          </h3>

          {author.designation && (
            <p className="mt-1 font-medium text-primary">
              {author.designation}
            </p>
          )}

          {author.bio && (
            <p className="mt-4 leading-7 text-slate-600">
              {author.bio}
            </p>
          )}

          {/* SOCIAL */}

          <div className="mt-6 flex items-center gap-3">

            {author.website && (
              <Link
                href={author.website}
                target="_blank"
                className="rounded-full border border-slate-200 p-3 transition hover:bg-primary hover:text-white"
              >
                <Globe size={18} />
              </Link>
            )}

            {author.facebook && (
              <Link
                href={author.facebook}
                target="_blank"
                className="rounded-full border border-slate-200 p-3 transition hover:bg-primary hover:text-white"
              >
                <Facebook size={18} />
              </Link>
            )}

            {author.instagram && (
              <Link
                href={author.instagram}
                target="_blank"
                className="rounded-full border border-slate-200 p-3 transition hover:bg-primary hover:text-white"
              >
                <Instagram size={18} />
              </Link>
            )}

            {author.linkedin && (
              <Link
                href={author.linkedin}
                target="_blank"
                className="rounded-full border border-slate-200 p-3 transition hover:bg-primary hover:text-white"
              >
                <Linkedin size={18} />
              </Link>
            )}

          </div>

        </div>

      </div>
    </section>
    </>
  );
}