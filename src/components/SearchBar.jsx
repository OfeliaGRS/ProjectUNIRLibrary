export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
