"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ images }) {
  const [index, setIndex] = useState(-1);
  const [loadedImages, setLoadedImages] = useState({});
  return (
    <>
      <div className="columns-2 md:columns-3 xl:columns-4 gap-5 space-y-5">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setIndex(i)}
          >
            {!loadedImages[image.src] && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}

            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={1200}
              sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
              onLoad={() =>
                setLoadedImages((prev) => ({
                  ...prev,
                  [image.src]: true,
                }))
              }
              className={`w-full h-auto object-cover transition-all duration-500 ${
                loadedImages[image.src]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              } group-hover:scale-105`}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((item) => ({
          src: item.src,
        }))}
      />
    </>
  );
}
