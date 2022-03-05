import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookList from "./BookList";

function BookSearch () {
  const [bookInput, setBookInput] = useState("");
  const [books, setBooks] = useState({});
  const [page, setPage] = useState(1);

  const changeBookInput = useCallback((e) => {
    setBookInput(e.target.value);
  }, [setBookInput]);

  const searchBooks = useCallback(() => {
    if (bookInput !== "") {
      const params = new URLSearchParams({
        q: bookInput,
        page: page,
      });
    
      fetch(`https://openlibrary.org/search.json?${params.toString()}`)
        .then(res => res.json())
        .then(books => setBooks(books))
    } else {
      setBooks({});
    }
  }, [bookInput, page, setBooks]);

  useEffect(() => {
    searchBooks();
  }, [page])

  return (
    <div>
      <input value={bookInput} onChange={changeBookInput} type="text" id="book" name="book"></input>
      <button onClick={searchBooks} type="button" id="search">Search</button>
      {
        Object.keys(books).length > 0 &&
        <BookList
          books={books}
          page={page}
          setPage={setPage}
        />
      }
    </div>
  );
}

export default BookSearch;