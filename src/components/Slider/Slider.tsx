"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Container } from "@/components/Container";
import Slider_img1 from "@/assets/Images/frame-logo.png";
import Slider_img2 from "@/assets/Images/frame-aeroplain.png";
import Slider_img3 from "@/assets/Images/frame-logo.png";
import Slider_img4 from "@/assets/Images/frame-people.png";
import Slider_img5 from "@/assets/Images/frame-tshirt.png";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Container className="py-14">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
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
