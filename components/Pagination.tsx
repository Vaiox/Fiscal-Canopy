import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

export default function Pagination({ currentPage, totalPages, basePath = '' }: PaginationProps) {
  const getPageUrl = (page: number) => {
    if (page === 1) return basePath || '/'
    return `${basePath}/page/${page}`
  }

  const renderPageNumbers = () => {
    const pages = []
    const showPages = 5 // Show 5 page numbers

    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, startPage + showPages - 1)

    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1)
    }

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <Link
          key="prev"
          href={getPageUrl(currentPage - 1)}
          className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors rounded"
        >
          &lt;
        </Link>
      )
    }

    // First page
    if (startPage > 1) {
      pages.push(
        <Link
          key={1}
          href={getPageUrl(1)}
          className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors rounded"
        >
          1
        </Link>
      )
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-2 text-gray-500">
            ...
          </span>
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          className={`px-4 py-2 border transition-colors rounded ${
            i === currentPage
              ? 'bg-primary text-white border-primary font-bold'
              : 'border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary'
          }`}
        >
          {i}
        </Link>
      )
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-2 text-gray-500">
            ...
          </span>
        )
      }
      pages.push(
        <Link
          key={totalPages}
          href={getPageUrl(totalPages)}
          className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors rounded"
        >
          {totalPages}
        </Link>
      )
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <Link
          key="next"
          href={getPageUrl(currentPage + 1)}
          className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors rounded"
        >
          &gt;
        </Link>
      )
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center items-center space-x-2 my-12">
      {renderPageNumbers()}
    </div>
  )
}
