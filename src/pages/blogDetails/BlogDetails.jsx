import React, { useEffect, useState } from "react";
import Container from "../../components/shared/container/container";
import Title from "../../components/shared/title/Title";
import { useLoaderData } from "react-router-dom";
import { BsCalendarDateFill } from "react-icons/bs";
import BlogCard from "../blog/BlogCard";
import './blogDetails.css'

const BlogDetails = () => {
  const blgData = useLoaderData();
  
  const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
    }, [])

  return (
    <div className="my-10">
      <Container>
        <div>
          <Title title="Blog Details" subtitle="Our Blog" />
        </div>
        <div className="mt-16 flex flex-col lg:flex-row gap-12">
            <div className="w-1/12">
            </div>
          <div className="w-full lg:w-6/12">
          <div className="blg-img">
            <img src={blgData?.image} alt="" />
          </div>
          <div className="text-start mt-10">
            <h3 className="font-Urbanist text-4xl font-extrabold">
              {blgData?.blogTitle}
            </h3>
            <div className="mt-5 flex justify-between">
              <div className="border-2 border-opacity-40 hover:bg-orange-600 hover:text-white transition-all ease-in-out duration-300 rounded-md border-orange-600">
                <p className="px-4 py-1 font-Inter font-semibold text-base uppercase">
                  {blgData?.blogCategory}
                </p>
              </div>
              <div className="flex items-center gap-3 text-orange-600">
                <BsCalendarDateFill className="" />
                <p className="text-base font-Inter font-semibold">
                  {blgData?.date}
                </p>
              </div>
            </div>
            <div className="my-8 font-Inter text-lg font-medium">
                <p>{blgData?.description}</p>
            </div>
          </div>
          </div>
          <div className="w-full lg:w-3/12 mt-3 flex flex-col gap-4 relative before:absolute before:w-5 before:h-1 before:bg-orange-600 before:translate-y-4">
            <p className="mb-3 ms-8 font-Inter font-bold text-2xl">Other Blogs</p>
            {blogs.map(blg =><BlogCard 
                blg={blg}
                key={blg._id}
                />)}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
