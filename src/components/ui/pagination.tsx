import { MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  totalItems: number;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  canPreviousPage,
  canNextPage,
  totalItems,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // If we have 5 or fewer pages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3);
        pages.push("ellipsis");
        pages.push(totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2);
        pages.push("ellipsis");
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, 2);
        pages.push("ellipsis");
        pages.push(currentPage, currentPage + 1, currentPage + 2);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-x-2 pt-4 px-0 md:px-20 gap-5 md:gap-0">
      <div className="hidden md:block"></div>

      <div className="flex justify-center md:justify-start items-center space-x-5">
        <button
          disabled={!canPreviousPage}
          onClick={() => onPageChange(currentPage - 1)}
          className={`w-2 h-auto ${!canPreviousPage ? "opacity-50" : ""}`}
        >
          <img src="/images/left-arrow.svg" alt="arrow" />
        </button>

        <div className="flex items-center space-x-5">
          {pageNumbers.map((page, index) => {
            if (typeof page === "string") {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className="flex items-center justify-center w-8 h-8"
                >
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </div>
              );
            }

            return (
              <button
                onClick={() => onPageChange(page)}
                className={`text-font-16 ${
                  currentPage === page
                    ? "text-custom-gray font-bold underline"
                    : "text-custom-gray-300"
                } `}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          disabled={!canNextPage}
          onClick={() => onPageChange(currentPage + 1)}
          className={`w-2 h-auto ${!canNextPage ? "opacity-50" : ""}`}
        >
          <img src="/images/right-arrow.svg" alt="arrow" />
        </button>
      </div>

      <div className="text-font-16 font-bold text-custom-blue-300 text-center md:text-left">
        {totalItems.toLocaleString()} Leads
      </div>
    </div>
  );
}
