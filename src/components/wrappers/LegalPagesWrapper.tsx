import React from "react";

function LegalPagesWrapper({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl bg-white/80 p-8 shadow-xl backdrop-blur">{children}</div>
    </div>
  );
}

export default LegalPagesWrapper;
