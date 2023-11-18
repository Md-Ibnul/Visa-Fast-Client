import React from 'react';
import './category.css'
import Container from '../../../components/shared/container/container';
import bottom from '../../../assets/images/bottom-bar.png';
import immigrant from '../../../assets/images/immigrant.png';
import tourist from '../../../assets/images/travel-tourism.png';
import student from '../../../assets/images/graduate.png';
import visit from '../../../assets/images/traveler.png';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='pb-28 pt-10 bg-slate-300 bg-opacity-10'>
            <Container>
                <div>
                    <div className='text-center relative py-10'>
                        <p className='font-Fasthand text-2xl text-orange-600'>Travel Category</p>
                        <h3 className='font-Urbanist font-extrabold text-4xl'>Our Popular Visa Type</h3>
                        <div className='absolute left-1/3 bottom-2'>
                        <img src={bottom} alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
                        <Link className='flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon'>
                            <img width={70} height={70} src={immigrant} alt="" />
                            <h4 className='mt-12 font-Urbanist font-bold text-xl text-gray-700'>Immigrant Visa</h4>
                        </Link>
                        <Link className='flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon'>
                            <img width={70} height={70} src={tourist} alt="" />
                            <h4 className='mt-12 font-Urbanist font-bold text-xl text-gray-700'>Tourist Visa</h4>
                        </Link>
                        <Link className='flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon'>
                            <img width={70} height={70} src={student} alt="" />
                            <h4 className='mt-12 font-Urbanist font-bold text-xl text-gray-700'>Student Visa</h4>
                        </Link>
                        <Link className='flex flex-col bg-white px-0 py-20 justify-center items-center cat-icon'>
                            <img width={120} height={120} src={visit} alt="" />
                            <h4 className='mt-12 font-Urbanist font-bold text-xl text-gray-700'>Visitor Visa</h4>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Category;