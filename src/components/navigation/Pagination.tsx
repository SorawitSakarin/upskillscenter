import React from "react";
import { Pagination } from "react-bootstrap";

interface NumberOfPages {
  totalPages: number;
  activePage : number;
  setActivePage : any;
}

const PaginationBar: React.FC<NumberOfPages> = ({ totalPages, activePage ,setActivePage}) => {

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const renderPaginationItems = () => {
    let items: JSX.Element[] = [];

    if (activePage > 1) {
      items.push(
        <Pagination.Item
          key={activePage - 1}
          onClick={() => handlePageChange(activePage - 1)}
        >
          {activePage - 1}
        </Pagination.Item>
      );
    }

    items.push(
      <Pagination.Item key={activePage} active>
        {activePage}
      </Pagination.Item>
    );

    if (activePage < totalPages) {
      items.push(
        <Pagination.Item
          key={activePage + 1}
          onClick={() => handlePageChange(activePage + 1)}
        >
          {activePage + 1}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div>
      <Pagination className="">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={activePage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(Math.max(1, activePage - 1))}
          disabled={activePage === 1}
        />
        {renderPaginationItems()}
        <Pagination.Next
          onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
          disabled={activePage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={activePage === totalPages}
        />
      </Pagination>
    </div>
  );
};
export default PaginationBar;
