import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Title from '../../shared/title/Title';
import toast from 'react-hot-toast';

const img_hosting_token = import.meta.env.VITE_Image_Host_Key;

const UpdateBlog = () => {
const navigate = useNavigate();
const blog = useLoaderData();

const {_id, blogTitle, image, blogCategory, date, description} = blog || {};

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm();
      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
      const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
    
        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((imgData) =>{
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;
                    const { blogTitle, blogCategory, date, description} = data;
                    const newInfo = {
                        blogTitle, 
                        blogCategory, 
                        date, 
                        description,
                      image: imgURL,
                    };
          
                    fetch(`http://localhost:5000/blogs/update/${_id}`, {
                    method: "PUT",
                    headers: {
                      'content-type': 'application/json',
                      authorization: `Bearer ${localStorage.getItem('access-token')}`,
                  },
                    body: JSON.stringify(newInfo),
                  })
                    .then((res) => res.json())
                    .then(data => {
                      if (data.modifiedCount ) {
                        toast.success("Your Blog Has been Updated!");
                        reset();
                        navigate('/dashboard/manageBlogs');
                      }
                    });
                  }
            })
    
          
      };

    return (
        <div className="bg-sky-100 text-center min-h-screen p-5">
      <Title title="Update A Blog" subtitle="Ready to go!"/>
      <div className="w-4/5 md:w-full mx-auto text-start mt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='md:flex gap-5'>
          <div className='w-full'>
            <label className="ms-2 font-bold text-lg">Blog Title</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            type='text'
            defaultValue={blogTitle}
            {...register("blogTitle", { required: true })}
          /></div>

          <div className='w-full mb-5 md:mb-0'>
          <label className="ms-2 font-bold text-lg">Blog's Image</label>
          <input type='file'
             className="file-input w-full bg-transparent"
            {...register("image", { required: true })}
          />
          </div>

          </div>
          <div className='md:flex gap-5'>
          <div className='w-full'>
          <label className="ms-2 font-bold text-lg">Blog Category</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            type='text'
            defaultValue={blogCategory}
            {...register("blogCategory", { required: true })}
          />
          </div>
          <div className='w-full'>
          <label className="ms-2 font-bold text-lg">Blog Date</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            type='date'
            defaultValue={date}
            {...register("date", { required: true })}
          />
          </div>
          </div>

          <label className="ms-2 font-bold text-lg">Blog's Description</label>
          <textarea
            className="border border-slate-900 block rounded w-full h-32 mb-12 ps-3 bg-transparent"
            defaultValue={description}
            {...register("description", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="block bg-orange-600 hover:bg-orange-800 transition text-white font-bold text-lg w-full py-3 rounded cursor-pointer"
            value="Update Blog"
            type="submit"
          />
        </form>
      </div>
    </div>
    );
};

export default UpdateBlog;