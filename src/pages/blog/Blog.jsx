import React, { useEffect, useState } from "react";
import './blog.css'
import Container from "../../components/shared/container/container";
import BlogCard from "./BlogCard";

const Blog = () => {
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
    <div>
      <div className="blog-bg">
        <div className="z-10 w-full mx-auto text-center">
          <h4 className="text-white font-Urbanist font-extrabold w-full uppercase">
            Blogs
          </h4>
        </div>
      </div>
      <Container>
        <div className="my-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

export default Blog;
