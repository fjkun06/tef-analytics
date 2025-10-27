import React from "react";

function AboutPhoto() {
  return (
    <div className="aspect-[192/284] overflow-hidden rounded-full">
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
