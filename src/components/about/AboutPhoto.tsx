import React from "react";

function AboutPhoto() {
  return (
    <div className="max-w[192px] aspect-[192/284] max-h-[284px] overflow-hidden rounded-full">
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
