"use client";

import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IPagination {
  pageCount: number;
  page: number;
  handlePageClick(value: { selected: number }): void;
}

const Pagination = ({
  handlePageClick,
  page = 1,
  pageCount = 0,
}: IPagination) => {
  return (
    <div className="px-0">
      <ReactPaginate
        breakLabel="..."
        className="react-paginate"
        previousLabel={
          <span>
            <ChevronLeft size={15} />
          </span>
        }
        nextLabel={
          <span>
            <ChevronRight size={15} />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        forcePage={page - 1}
        pageCount={pageCount}
        pageClassName="page_item"
        pageLinkClassName="page_link"
        previousClassName="page_item page_prev"
        previousLinkClassName="page_link"
        nextClassName="page_item page_next"
        nextLinkClassName="page_link"
        breakClassName="page_item"
        breakLinkClassName="page_link"
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};

export default Pagination;
