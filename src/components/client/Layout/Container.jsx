"use client";
import { cn } from "@/lib/utils";

const Container = ({ children, className = "", max = "max-w-7xl" }) => {
  return (
    <div className={cn(max, "mx-auto px-6 md:px-12", className)}>
      {children}
    </div>
  );
};

export default Container;

