export default function Button({ children, ...prop }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...prop}
    >
      {children}
    </button>
  );
}