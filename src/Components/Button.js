export default function Button({ text }) {
  return (
    <button className="bg-blue-900 hover:bg-opacity-80 text-white py-3 rounded">
      {text}
    </button>
  );
}
