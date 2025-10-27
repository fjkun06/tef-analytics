import React from "react";

export default function AboutRegularPillsContainer() {
  return (
    <div className="flex w-full flex-col bg-white lg:max-w-[275px]">
      <h4 className="text-sm font-medium text-blue-600">MLOps</h4>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">TensorFlow</span>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">Kubernetes</span>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">Docker</span>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">MLflow</span>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">TensorFlow</span>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">Kubernetes</span>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">Docker</span>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">MLflow</span>
      </div>
    </div>
  );
}
