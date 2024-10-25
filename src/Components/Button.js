export default function Button({ text }) {
  return (
    <button className="py-3 bg-black text-white hover:bg-opacity-80 rounded">
      {text}
    </button>
  );
}
