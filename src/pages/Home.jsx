import { Link } from "react-router-dom";
import { books } from "../data/books";
import PageTitle from "../components/PageTitle";
import BookList from "../components/BookList";

export default function Home() {
  const total = books.length;
  const available = books.filter((b) => b.available).length;
  const categories = new Set(books.map((b) => b.category)).size;

  const featured = books.slice(0, 3);

  return (
    <main className="page">
      <section className="home-hero">
        <div className="home-hero__content">
          <PageTitle
            title="UNIR Library"
            subtitle="Explora, busca y gestiona préstamos en una biblioteca online."
          />

          <div className="home-hero__actions">
            <Link className="btn btn--primary" to="/catalog">
              Ver catálogo
            </Link>
            <Link className="btn btn--primary" to="/rentals">
              Ver mis alquileres
            </Link>
          </div>

          <div className="home-stats">
            <div className="home-stats__card">
              <p className="home-stats__label">Libros</p>
              <p className="home-stats__value">{total}</p>
            </div>
            <div className="home-stats__card">
              <p className="home-stats__label">Disponibles</p>
              <p className="home-stats__value">{available}</p>
            </div>
            <div className="home-stats__card">
              <p className="home-stats__label">Categorías</p>
              <p className="home-stats__value">{categories}</p>
            </div>
          </div>
        </div>

        <div className="home-hero__panel">
          <div className="home-hero__panel-box">
            <p className="home-hero__panel-title">Consejo rápido</p>
            <p className="home-hero__panel-text">
              Usa el buscador por <strong>título</strong>, <strong>autor</strong> o{" "}
              <strong>categoría</strong> para filtrar el catálogo.
            </p>
            <Link className="btn btn--small" to="/catalog">
              Probar búsqueda
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section__title">Destacados</h2>
        <p className="home-section__subtitle">
          Una selección rápida para comenzar.
        </p>

        <BookList books={featured} />
      </section>
    </main>
  );
}
