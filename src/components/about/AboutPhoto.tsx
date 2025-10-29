/**
 * AboutPhoto
 *
 * Client component that displays a circular profile photo with white border.
 * Shows a professional headshot image with optimized loading and proper alt text.
 * Features rounded styling with aspect ratio preservation and object-fit cover.
 *
 * @returns {React.ReactElement} Circular profile photo with border
 *
 * @example
 * ```tsx
 * <AboutPhoto />
 * ```
 */
import React from "react";

function AboutPhoto() {
  return (
    <div className="max-w[192px] aspect-[192/284] max-h-[284px] overflow-hidden rounded-full border-4 border-white">
      <img
        src="/photo.jpg"
        alt="Mr. Franck Tankouan"
        loading="lazy"
        className="aspect-[192/284] h-full object-cover"
      />
    </div>
  );
}

export default AboutPhoto;
