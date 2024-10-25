import Slider from "../Slider";

const data = [
  {
    id: 1,
    title: "Fist car",
    description: "Loream",
    image:
      "https://images.unsplash.com/photo-1570089434134-9fe163fcfb8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
  },
];
export default function Unique() {
  return (
    <div className="lg:p-12 lg:pt-52 p-4">
      <div>
        <h1 className="text-4xl tracking-tight font-bold">Our Unique Cars</h1>
        <div className="bg-gray-800 h-1 w-12" />
      </div>
      <Slider data={data} />
    </div>
  );
}
