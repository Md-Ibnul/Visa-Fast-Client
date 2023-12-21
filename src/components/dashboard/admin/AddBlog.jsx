import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import AuthProvider from '../../../providers/AuthProviders';
import Title from '../../shared/title/Title';
import { addBlog } from '../../../api/Blog';

const img_hosting_token = import.meta.env.VITE_Image_Host_Key;

const AddBlog = () => {
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
      
                addBlog(newInfo)
                .then((data) => {
                  if (data.insertedId) {
                    toast.success("Your Blog Has been Uploaded!");
                    reset();
                  }
                });
              }
        })

      
  };

  return (
    <div className="bg-sky-100 text-center min-h-screen p-5">
      <Title title="Add A Blog" subtitle="Ready to go!"/>
      <div className="w-4/5 md:w-full mx-auto text-start mt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='md:flex gap-5'>
          <div className='w-full'>
            <label className="ms-2 font-bold text-lg">Blog Title</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            type='text'
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
            {...register("blogCategory", { required: true })}
          />
          </div>
          <div className='w-full'>
          <label className="ms-2 font-bold text-lg">Blog Date</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            type='date'
            {...register("date", { required: true })}
          />
          </div>
          </div>

          <label className="ms-2 font-bold text-lg">Blog's Description</label>
          <textarea
            className="border border-slate-900 block rounded w-full h-32 mb-12 ps-3 bg-transparent"
            {...register("description", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="block bg-orange-600 hover:bg-orange-800 transition text-white font-bold text-lg w-full py-3 rounded cursor-pointer"
            value="Add Blog"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;