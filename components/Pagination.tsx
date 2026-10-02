import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath = "",
}: PaginationProps) {
  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath || "/";
    }

    if (basePath) {
      return `${basePath}/page/${page}`;
    }

    return `/page/${page}`;
  };

  const renderPageNumbers = () => {
    const pages: React.ReactNode[] = [];

    const showPages = 5;

    let startPage = Math.max(
      1,
      currentPage - 2
    );

    let endPage = Math.min(
      totalPages,
      startPage + showPages - 1
    );

    if (
      endPage - startPage <
      showPages - 1
    ) {
      startPage = Math.max(
        1,
        endPage - showPages + 1
      );
    }

    const buttonClasses =
      "rounded border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-primary hover:bg-primary hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:border-primary";

    /* Previous */

    if (currentPage > 1) {
      pages.push(
        <Link
          key="prev"
          href={getPageUrl(
            currentPage - 1
          )}
          className={buttonClasses}
          aria-label="Previous page"
        >
          &lt;
        </Link>
      );
    }

    /* First page */

    if (startPage > 1) {
      pages.push(
        <Link
          key={1}
          href={getPageUrl(1)}
          className={buttonClasses}
        >
          1
        </Link>
      );

      if (startPage > 2) {
        pages.push(
          <span
            key="ellipsis1"
            className="px-2 text-gray-500 dark:text-gray-400"
          >
            ...
          </span>
        );
      }
    }

    /* Page numbers */

    for (
      let i = startPage;
      i <= endPage;
      i++
    ) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          aria-current={
            i === currentPage
              ? "page"
              : undefined
          }
          className={`rounded border px-4 py-2 transition-colors ${
            i === currentPage
              ? "border-primary bg-primary font-bold text-white"
              : "border-gray-300 text-gray-700 hover:border-primary hover:bg-primary hover:text-white dark:border-gray-600 dark:text-gray-300"
          }`}
        >
          {i}
        </Link>
      );
    }

    /* Last page */

    if (endPage < totalPages) {
      if (
        endPage <
        totalPages - 1
      ) {
        pages.push(
          <span
            key="ellipsis2"
            className="px-2 text-gray-500 dark:text-gray-400"
          >
            ...
          </span>
        );
      }

      pages.push(
        <Link
          key={totalPages}
          href={getPageUrl(
            totalPages
          )}
          className={buttonClasses}
        >
          {totalPages}
        </Link>
      );
    }

    /* Next */

    if (currentPage < totalPages) {
      pages.push(
        <Link
          key="next"
          href={getPageUrl(
            currentPage + 1
          )}
          className={buttonClasses}
          aria-label="Next page"
        >
          &gt;
        </Link>
      );
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className="my-12 flex items-center justify-center space-x-2"
    >
      {renderPageNumbers()}
    </nav>
  );
}