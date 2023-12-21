import React from 'react';
import { BsCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './blog.css'

const BlogCard = ({blg}) => {
    return (
        <div className='flex flex-col rounded shadow border border-gray-200'>
            <div className='p-4 rounded blog-img'>
                <img src={blg?.image} alt="" />
            </div>
            <div className='px-8 mt-2'>
            <div className='flex justify-between'>
                <div className='border-2 border-opacity-40 hover:bg-orange-600 hover:text-white transition-all ease-in-out duration-300 rounded-md border-orange-600'><p className='px-4 py-1 font-Inter font-semibold text-base uppercase'>{blg?.blogCategory}</p></div>
                <div className='flex items-center gap-3'><BsCalendarDateFill className='' /><p className='text-base font-Inter font-semibold'>{blg?.date}</p></div>
            </div>
            <h4 className=' font-Urbanist font-extrabold text-2xl hover:text-orange-600 transition-all ease-in-out py-4'>
                <Link to={`/blogDetails/${blg._id}`}>{blg.blogTitle}</Link>
            </h4>
            </div>
        </div>
    );
};

export default BlogCard;