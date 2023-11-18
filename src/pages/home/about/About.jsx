import React from 'react';
import './about.css'
import ticketsImg from '../../../assets/images/tickets.jpg';
import windowImg from '../../../assets/images/window.png';
import aboutIcon from '../../../assets/images/about-icon.png';
import bottom from '../../../assets/images/bottom-bar.png';
import love from '../../../assets/images/pink.png';
import Container from '../../../components/shared/container/container';

const About = () => {
    return (
        <div className='my-40'>
            <Container>
            <div className='flex gap-5justify-center'>
                <div className='relative w-2/3 ms-10'>
                    <div className='absolute aboutIcon1'>
                        <img src={aboutIcon} alt="" />
                    </div>
                    <div className='absolute aboutImage1'>
                        <img width={400} height={500} src={ticketsImg} alt="" />
                    </div>
                    <div className='absolute aboutImage2'>
                        <img src={windowImg} alt="" />
                    </div>
                </div>
                <div className='w-1/2 mt-10 relative'>
                    <div className='absolute right-0 top-7 animate-pulse'>
                        <img src={love} alt="" />
                    </div>
                    <p className='font-Fasthand text-orange-600 text-xl'>About US</p>
                    <h4 className='font-Josefin text-4xl font-extrabold w-5/6 leading-snug text-gray-800 uppercase'>Explore all tour of the world with us.</h4>
                    <div className='absolute -bottom-7'>
                    <img src={bottom} alt="" />
                    </div>
                    <p></p>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default About;