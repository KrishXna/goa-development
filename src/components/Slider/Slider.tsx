"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import { Container } from "@/components/Container";
import Slider_img1 from "@/assets/Images/slider_img1.png";
import Slider_img2 from "@/assets/Images/slider_img2.png";
import Slider_img3 from "@/assets/Images/slider_img3.png";
import Slider_img4 from "@/assets/Images/slider_img4.png";
import Slider_img5 from "@/assets/Images/slider_img5.png";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Container className="py-20">
        <Swiper
          //   modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          initialSlide={2}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          grabCursor={true}
          centeredSlides={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          //   onSwiper={(swiper) => console.log(swiper)}
          //   onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-white-100 p-4">
              <img
                src={Slider_img1.src}
                alt="slider_img"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white-100 p-4">
              <img
                src={Slider_img2.src}
                alt="slider_img"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white-100 p-4">
              <img
                src={Slider_img3.src}
                alt="slider_img"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white-100  p-4">
              <img
                src={Slider_img4.src}
                alt="slider_img"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white-100 p-4">
              <img
                src={Slider_img5.src}
                alt="slider_img"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default Slider;
