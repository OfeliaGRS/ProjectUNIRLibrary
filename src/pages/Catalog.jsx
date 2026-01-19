import { useEffect, useState } from "react";
import { books } from "../data/books";
import { useSearch } from "../hooks/useSearch";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setList(books), 300);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useSearch(list, query);

  return (
    <main className="page">
      <PageTitle title="Catálogo" subtitle={`Resultados: ${filtered.length}`} />

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Buscar por título, autor o categoría..."
      />

      <BookList books={filtered} />
    </main>
  );
}
