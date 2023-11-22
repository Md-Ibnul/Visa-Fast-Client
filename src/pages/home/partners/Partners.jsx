import React from 'react';
import './partners.css'
import Container from '../../../components/shared/container/container';
import Title from '../../../components/shared/title/Title';
import partner1 from '../../../assets/images/Biman-Bangladesh.png'
import partner2 from '../../../assets/images/Biman-Holidays.png'
import partner3 from '../../../assets/images/ES-Global.png'
import partner4 from '../../../assets/images/Lion.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Partners = () => {
    return (
        <div  className='mt-32 mb-20'>
            <Container>
                <div>
                    <Title title="Our Most Trusted Partners" subtitle="Travel Partners"/>
                </div>
                <div className="mt-32 mb-8">
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
                <div className='slider-img flex justify-center relative bottom-12'>
                  <img width={200} height={200} src={partner1} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slider-img flex justify-center items-center'>
                  <img width={200} height={200} src={partner2} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slider-img flex justify-center items-center'>
                  <img width={200} height={200} src={partner3} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slider-img flex justify-center items-center'>
                  <img width={150} height={150}  src={partner4} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slider-img flex justify-center items-center'>
                  <img width={200} height={200} src={partner2} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
            </Container>
        </div>
    );
};

export default Partners;