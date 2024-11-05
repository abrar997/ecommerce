import { BsCarFront, BsQuote } from "react-icons/bs";

export default function Customer() {
  return (
    <div className="bg-[#00000040] my-8 lg:my-16  grid items-center justify-center">
      <div className="lg:py-12 py-8 px-6 grid lg:gap-8 gap-5 justify-center items-center m-auto">
        <h1 className="text-3xl capitalize font-bold text-center">
          Our Customer Say :
        </h1>
        <div className="text-black">
          <div className="bg-gray-100 lg:px-12 px-4 py-6 rounded">
            <BsQuote className="text-2xl" />
            <p className="italic lg:w-1/2 text-center m-auto">
              I found my dream car here! The team was incredibly helpful and
              transparent throughout the entire process. Highly recommend
            </p>
            <BsQuote className="ml-auto text-2xl rotate-180" />
            <p className="text-gray-400 text-center flex items-center justify-center gap-2">
              <BsCarFront /> Michael R.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
