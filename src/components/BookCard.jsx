import { Link } from "react-router-dom";
const FALLBACK_COVER = "https://via.placeholder.com/110x160?text=Sin+Portada";

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-card__media">
        <img
          className="book-card__img"
          src={book.cover && book.cover.trim() ? book.cover : FALLBACK_COVER}
          alt={`Portada de ${book.title}`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_COVER;
          }}
        />
      </div>

      <div className="book-card__body">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__meta">
          {book.author} · {book.year} · {book.category}
        </p>

        <span
          className={
            book.available ? "book-card__badge book-card__badge--ok" : "book-card__badge book-card__badge--off"
          }
        >
          {book.available ? "Disponible" : "No disponible"}
        </span>

        <Link className="book-card__btn" to={`/book/${book.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
