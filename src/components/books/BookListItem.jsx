function BookListItem ({ book }) {
  return (
    <tr>
      <td className="table-cell">{book.title}</td>
      <td className="table-cell">{book.author_name}</td>
      <td className="table-cell">{book.first_publish_year}</td>
      <td className="table-cell">
        {typeof book.subject !== "undefined" ? book.subject.slice(0, 5).join(", ") : ""}
      </td>
    </tr>
  );
}

export default BookListItem;