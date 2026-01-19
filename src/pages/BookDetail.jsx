import { useParams } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => String(b.id) === String(id));

  if (!book) return <p>No se encontró el libro.</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Año:</strong> {book.year}</p>
      <p><strong>Categoría:</strong> {book.category}</p>
      <p><strong>Sinopsis:</strong> {book.synopsis}</p>
      <p><strong>Estado:</strong> {book.available ? "Disponible" : "No disponible"}</p>
    </div>
  );
}
