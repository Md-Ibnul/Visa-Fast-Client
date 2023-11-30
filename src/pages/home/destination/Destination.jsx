import Container from "../../../components/shared/container/container";
import Title from "../../../components/shared/title/Title";
import './destination.css'
import usa from "../../../assets/images/Destination4.jpg";
import uk from "../../../assets/images/Destination5.jpg";
import australia from "../../../assets/images/Destination1.jpg";
import canada from "../../../assets/images/Destination3.jpg";
import italy from "../../../assets/images/Destination2.jpg";
import malta from "../../../assets/images/Destination6.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div className="pb-20 pt-24">
      <Container>
        <div>
          <Title subtitle="Destination" title="Your Desired Destination" />
        </div>
        <div className="mt-32">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            pagination={{
              clickable: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="des-content text-center">
                <div className="des-img">
                <img src={usa} alt="" />
                </div>
                <div className="des-title">
                    <h4 className="font-Urbanist font-bold text-4xl"><Link to="/destination">United State</Link></h4>
                    <p className="font-Inter font-semibold">All Within Your Reach</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="des-content text-center">
                <div className="des-img">
                <img src={uk} alt="" />
                </div>
                <div className="des-title">
                    <h4 className="font-Urbanist font-bold text-4xl"><Link to="/destination">United Kingdom</Link></h4>
                    <p className="font-Inter font-semibold">See Things Differently</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="des-content text-center">
                <div className="des-img">
                <img src={canada} alt="" />
                </div>
                <div className="des-title">
                    <h4 className="font-Urbanist font-bold text-4xl"><Link to="/destination">Canada</Link></h4>
                    <p className="font-Inter font-semibold">Dreams do come true</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="des-content text-center">
                <div className="des-img">
                <img src={australia} alt="" />
                </div>
                <div className="des-title">
                    <h4 className="font-Urbanist font-bold text-4xl"><Link to="/destination">Australia</Link></h4>
                    <p className="font-Inter font-semibold">Go around the world affordably</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="des-content text-center">
                <div className="des-img">
                <img src={italy} alt="" />
                </div>
                <div className="des-title">
                    <h4 className="font-Urbanist font-bold text-4xl"><Link to="/destination">Italy</Link></h4>
                    <p className="font-Inter font-semibold">La Dolce Vita</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="des-content text-center">
                <div className="des-img">
                <img src={malta} alt="" />
                </div>
                <div className="des-title">
                    <h4 className="font-Urbanist font-bold text-4xl"><Link to="/destination">Malta</Link></h4>
                    <p className="font-Inter font-semibold">The Land for All Seasons</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Destination;
