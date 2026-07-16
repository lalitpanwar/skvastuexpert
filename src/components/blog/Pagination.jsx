"use client";

import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex items-center justify-center gap-3">

      {currentPage > 1 && (
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className="rounded-lg border px-4 py-2"
        >
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <Link
            key={page}
            href={`/blog?page=${page}`}
            className={`rounded-lg px-4 py-2 ${
              currentPage === page
                ? "bg-black text-white"
                : "border"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="rounded-lg border px-4 py-2"
        >
          Next
        </Link>
      )}
    </div>
  );
}