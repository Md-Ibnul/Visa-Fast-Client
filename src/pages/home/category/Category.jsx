import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./category.css";
import Container from "../../../components/shared/container/container";
import immigrant from "../../../assets/images/immigrant.png";
import tourist from "../../../assets/images/travel-tourism.png";
import student from "../../../assets/images/graduate.png";
import visit from "../../../assets/images/traveler.png";
import { Link } from "react-router-dom";
import Title from "../../../components/shared/title/Title";

const Category = () => {
  return (
    <div className="py-10 bg-slate-300 bg-opacity-20">
      <Container>
        <div>
          <div className="py-10">
            <Title subtitle="Travel Category" title="Our Popular Visa Type" />
          </div>
          <div className="mt-16 mb-8">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link className="flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon">
                  <img width={70} height={70} src={immigrant} alt="" />
                  <h4 className="mt-12 font-Urbanist font-bold text-xl text-gray-700">
                    Immigrant Visa
                  </h4>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link className="flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon">
                  <img width={70} height={70} src={tourist} alt="" />
                  <h4 className="mt-12 font-Urbanist font-bold text-xl text-gray-700">
                    Tourist Visa
                  </h4>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link className="flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon">
                  <img width={70} height={70} src={student} alt="" />
                  <h4 className="mt-12 font-Urbanist font-bold text-xl text-gray-700">
                    Student Visa
                  </h4>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link className="flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon">
                  <img width={120} height={120} src={visit} alt="" />
                  <h4 className="mt-12 font-Urbanist font-bold text-xl text-gray-700">
                    Visitor Visa
                  </h4>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link className="flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon">
                  <img width={70} height={70} src={tourist} alt="" />
                  <h4 className="mt-12 font-Urbanist font-bold text-xl text-gray-700">
                    Tourist Visa
                  </h4>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
