import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { ContextProduct } from "./context/ProductsContext";
// import { useSelector } from "react-redux";

export default function Slider({ title, isFirst, data }) {
  // const products = useContext(ContextProduct);
  console.log(data);

  return (
    <div
      className={`lg:px-12 grid ${
        isFirst ? "lg:pt-52 lg:pb-12 pt-20 pb-8" : "lg:py-12 py-8"
      } px-4 overflow-hidden`}
    >
      <div>
        <h1 className="lg:text-4xl text-3xl tracking-tight font-bold">
          {title}
        </h1>
        <div className="bg-gray-800 hidden lg:flex h-1 w-[54px] mb-6" />
      </div>
      <div className="max-w-full overflow-hidden grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        {/* <Swiper
          effect="coverflow"
          grabCursor="true"
          spaceBetween={10}
          slidesPerView={4}
          loop="true"
          modules={[FreeMode]}
          breakpoints={{
            900: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            700: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            500: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            411: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            300: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            220: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          }}
        > */}
        {data && data.length > 0 ? (
          data.map((slide, index) => {
            return (
              // <SwiperSlide key={slide.id}>
              <div
                className="group border border-black relative flex flex-col gap-2  p-2 rounded"
                key={index}
              >
                <img
                  src={slide.image}
                  alt="pic1"
                  className="h-[200px] rounded w-full grayscale"
                />
                <div className="p-2 pb-4 grid gap-1">
                  <h1 className="text-xl font-bold">{slide.title}</h1>
                  <p className="text-sm text-black bg-gray-300 px-1 w-fit">
                    ${slide.price}
                  </p>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
                <div className="bg-[#eeeeeec6] inset-0 absolute flex items-center justify-center opacity-0 h-0 group-hover:opacity-100 group-hover:h-full transition-all duration-300">
                  <Link
                    to={`product/${slide.id}`}
                    className=" bg-black px-2 py-2 text-white rounded"
                  >
                    more
                  </Link>
                </div>
              </div>
              // </SwiperSlide>
            );
          })
        ) : (
          <p>Loading ...</p>
        )}
        {/* </Swiper> */}
      </div>
    </div>
  );
}
