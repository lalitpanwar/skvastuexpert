"use client";

import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {Link2, Check } from "lucide-react";
import { useState } from "react";

import { createShareLinks } from "@/lib/utils/shareLinks";
import { SITE_FALLBACK as SITE } from "@/lib/site/fallback";
export default function ShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false);

  const url = `${SITE.url}/blog/${slug}`;

  const share = createShareLinks(url, title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 border-t border-slate-200 pt-8">
      <h3 className="mb-5 text-lg font-semibold">Share this article</h3>

      <div className="flex flex-wrap gap-3">
        <a
          href={share.whatsapp}
          target="_blank"
          className="rounded-full border p-3 transition hover:bg-green-500 hover:text-white"
        >
          <FaWhatsapp size={18} />
        </a>

        <a
          href={share.facebook}
          target="_blank"
          className="rounded-full border p-3 transition hover:bg-blue-600 hover:text-white"
        >
          <FaFacebookF size={18} />
        </a>

        <a
          href={share.Linkedin}
          target="_blank"
          className="rounded-full border p-3 transition hover:bg-sky-700 hover:text-white"
        >
          <FaLinkedinIn size={18} />
        </a>

        <a
          href={share.twitter}
          target="_blank"
          className="rounded-full border p-3 transition hover:bg-black hover:text-white"
        >
          <FaXTwitter size={18} />
        </a>

        <button
          onClick={copyLink}
          className="rounded-full border p-3 transition hover:bg-primary hover:text-white"
        >
          {copied ? <Check size={18} /> : <Link2 size={18} />}
        </button>
      </div>
    </div>
  );
}
