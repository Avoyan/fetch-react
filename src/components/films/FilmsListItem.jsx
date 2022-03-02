function FilmsListItem ({ film }) {
  return (
    <tr>
      <td className="table-cell">{film.title}</td>
      <td className="table-cell">{film.release_date}</td>
      <td className="table-cell">{film.director}</td>
      <td className="table-cell">{film.description}</td>
    </tr>
  );
}

export default FilmsListItem;