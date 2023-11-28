import React from 'react';
import './Banner.css'
import PlaneSlider from './PlaneSlider/PlaneSlider';
import Container from '../../../components/shared/container/container';
import bannerImage1 from '../../../assets/images/banner-image1.png'
import bannerImage2 from '../../../assets/images/banner-image2.png'
import bottomBar from '../../../assets/images/bottom-bar.png'
import design from '../../../assets/images/image.svg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>
            <PlaneSlider />
            <Container>
                <div className='grid lg:grid-cols-12 mt-14 justify-center'>
                    <div className='col-span-6 lg:col-span-3'>
                    <div className='banner-image1'>
                        <img src={bannerImage1} alt="" />
                    </div>
                    </div>
                    <div className='col-span-6 lg:col-span-5 mt-4'>
                        <div className='text-center relative'>
                        <img src={design} alt="" className='absolute right-0 -top-4'/>
                        <p className='font-Fasthand text-2xl text-center text-orange-600'>Tour and travels</p>
                            <h2 className='text-5xl font-Urbanist font-black leading-snug uppercase'>Let's travel the world with us</h2>
                            <img src={bottomBar} alt="" className='absolute -bottom-4 lg:left-10 w-fit' />
                        </div>
                        <div className='mt-8 w-10/12 lg:ms-14 text-justify'>
                            <p className='font-Inter text-lg font-semibold text-gray-600'><span className='text-orange-600 font-bold'>Visa Fast</span> is a leading travel agency dedicated to providing exceptional travel experiences to our clients. With a passion for exploration and a commitment to customer satisfaction, we specialize in crafting personalized and unforgettable journeys.</p>
                            <div className='text-center mt-10'>
                            <button className='btn bg-orange-600 text-white hover:bg-transparent hover:border-orange-600 hover:text-gray-700 text-center'>
                            <Link>See The Destinations</Link>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 mx-auto lg:col-span-4'>
                    <div className='lg:-mt-10'>
                        <img src={bannerImage2} alt="" />
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;