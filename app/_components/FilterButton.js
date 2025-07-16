export default function FilterButton({
  children,
  activeFilter,
  handleFilter,
  filter,
}) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-rosewood ${
        filter === activeFilter ? "bg-rosewood text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
