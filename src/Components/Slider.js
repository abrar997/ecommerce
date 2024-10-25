import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Slider({ data }) {
  console.log(data);

  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => {
          <SwiperSlide key={item.id} className="border">
            <img src={item.image} className="rounded h-[150px]" />
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
