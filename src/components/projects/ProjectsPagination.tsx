/**
 * ProjectsPagination
 *
 * Client component that renders a complete pagination control system for projects.
 * Displays numbered page buttons with previous/next navigation arrows, animated transitions,
 * and support for large datasets with limited visible page buttons. Manages current page state
 * and displays items sliced according to the current page selection.
 *
 * @returns {React.ReactElement} Pagination control with navigation items and page buttons
 *
 * @example
 * ```tsx
 * <ProjectsPagination />
 * ```
 */
"use client";
import { useState } from "react";

import ProjectsPaginationItem from "./ProjectsPaginationItem";
import { IconChevronLeft, IconChevronRight } from "../icons";
import { returnPagesToDisplay } from "@/utils/functions";

const allItems = Array.from({ length: 80 }, (_, i) => `Item ${i + 1}`);

export default function ProjectsPagination() {
  const [currentPage, setPage] = useState(1);
  const numberofItemsToDisplayPerPage = 10;
  const totalNumberOfPages = Math.ceil(allItems.length / numberofItemsToDisplayPerPage);

  // const pagesStartIndex = (currentPage - 1) * numberofItemsToDisplayPerPage;
  // const pagesEndIndex = pagesStartIndex + numberofItemsToDisplayPerPage;
  // const itemsToBeDisplayedForCurrentPage = allItems.slice(pagesStartIndex, pagesEndIndex);

  return (
    <div className="flex h-max w-full justify-center gap-2 bg-red-100">
      <ul className="flex h-max items-center gap-2">
        <ProjectsPaginationItem
          disabled={currentPage === 1}
          onClick={() => setPage(currentPage - 1)}
        >
          <IconChevronLeft />
        </ProjectsPaginationItem>
        {returnPagesToDisplay(currentPage, totalNumberOfPages).map((page) => (
          <ProjectsPaginationItem
            onClick={() => setPage(page)}
            isCurrent={page === currentPage}
            key={page}
            animationKey={page}
          >
            {page}
          </ProjectsPaginationItem>
        ))}
        <ProjectsPaginationItem
          disabled={currentPage === totalNumberOfPages}
          onClick={() => setPage(currentPage + 1)}
        >
          <IconChevronRight />
        </ProjectsPaginationItem>
      </ul>
    </div>
  );
}
