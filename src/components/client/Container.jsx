"use client";
export default function ({ children, classes = "", max="max-w-7xl" }) {
  return (
    <>
      <div className={`${max} mx-auto px-6 md:px-12 ${classes}`}>{children}</div>
    </>
  );
}
