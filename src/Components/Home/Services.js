import { FaCarCrash } from "react-icons/fa";
import { MdCarCrash, MdCarRepair } from "react-icons/md";

const data = [
  { id: 1, title: "Full-Service Detailing", icon: <FaCarCrash /> },
  { id: 2, title: "Engine Diagnostics", icon: <MdCarCrash /> },
  { id: 3, title: "Full-Service Detailing", icon: <MdCarRepair /> },
];
export default function Skills() {
  return (
    <div className="lg:px-12 px-4 pt-10 lg:absolute pb-20 lg:-top-20 m-auto z-3 inset-x-0 grid lg:items-center lg:justify-center">
      <div className="lg:gap-8 gap-4 grid lg:grid-cols-3 lg:justify-center lg:items-center">
        {data.map((item) => (
          <div
            className="border border-gray-500 rounded lg:grid flex items-center bg-back lg:px-6 lg:py-8 py-2 px-4 gap-4"
            key={item.id}
          >
            <span className="lg:text-5xl text-3xl text-gray-800 lg:m-auto">
              {item.icon}
            </span>
            <h3 className="lg:font-bold font-semibold lg:text-xl text-lg text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
