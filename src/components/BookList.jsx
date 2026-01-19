import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <section className="book-list">
      {books.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
    </section>
  );
}
