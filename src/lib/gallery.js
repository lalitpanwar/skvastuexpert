import fs from "fs/promises";
import path from "path";

export async function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), "public", "images/gallery");

  const files = await fs.readdir(galleryPath);

  return files
    .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => ({
      id: index + 1,
      src: `/images/gallery/${file}`,
      alt: file.replace(/\.[^/.]+$/, ""),
    }));
}