export default function returnPagesToDisplay(
  currentPage: number,
  totalPaginationPages: number,
): number[] {
  const numberOfPaginationButtons = totalPaginationPages > 5 ? 5 : totalPaginationPages;
  const pagesToDisplay = Array.from(
    { length: numberOfPaginationButtons },
    (_, i) => i + 1,
  );

  if (currentPage <= 5 && currentPage > 0) {
    return pagesToDisplay;
  } else if (currentPage >= totalPaginationPages - 4) {
    return pagesToDisplay.map((_, i) => totalPaginationPages - (4 - i));
  } else {
    return pagesToDisplay.map((_, i) => currentPage - (2 - i));
  }
}
