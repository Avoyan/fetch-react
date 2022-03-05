import { useCallback } from "react";
import { useMemo } from "react";
import BookListItem from "./BookListItem";

function BookList ({ books, page, setPage }) {
  const pagesCount = useMemo(() => {
    return Math.ceil(books.numFound / 100);
  }, [books]);

  const handlePageChange = useCallback((pageN) => () => {
    setPage(pageN);
  }, [setPage]);

  return (
    <div>
      <div>
        <div id="hits">{books.numFound} hits</div>
        <div id="list">
          <table className="table">
            <thead>
              <tr>
                <th className="table-cell">Title</th>
                <th className="table-cell">Author Name</th>
                <th className="table-cell">First Publish Year</th>
                <th className="table-cell">Subject</th>
              </tr>
            </thead>
            <tbody>
              {books.docs.map((item) => 
                <BookListItem
                  key={item.key}
                  book={item}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div id="pages">
        <div className="pagination">
          {[...Array(pagesCount + 1).keys()].slice(1).map((pageN) => 
            <a 
              className={pageN === page ? "active" : ""} 
              key={`books-list-page-${pageN}`}
              onClick={handlePageChange(pageN)}
            >{pageN}</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookList;