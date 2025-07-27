export default function FilterButton({
  children,
  activeFilter,
  handleFilter,
  filter,
}) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-2.5 py-2 sm:px-5 sm:py-2 hover:bg-rosewood-400 ${
        filter === activeFilter ? "bg-rosewood-400 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
