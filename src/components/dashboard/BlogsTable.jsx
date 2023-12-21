import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BlogsTable = ({blg, index, fetchBlogs }) => {

    const handleDelete = blg => {
        Swal.fire({
            title: `${blg.blogTitle} Delete?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/blogs/${blg._id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                fetchBlogs();
                Swal.fire(
                    'Delete!',
                    `${blg.blogTitle} is Deleted!`,
                    'success'
                  )
            }
        })
              
            }
          })
        
      }

    return (
        <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
        </div>
      </td>
      <td className=" py-5 border-b border-gray-200 bg-white text-sm">
        <div className="block relative">
          <img
            alt="profile"
            src={blg?.image}
            className="mx-auto object-cover rounded h-14 w-14 "
          />
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{blg?.blogTitle}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {blg?.blogCategory}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link
        to={`/dashboard/updateBlog/${blg?._id}`}
          className="btn btn-xs bg-yellow-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
          <FaEdit className="text-md" /> Edit
        </Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleDelete(blg)}
          className="btn btn-xs bg-red-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
          <ImCross className="text-md" /> Delete
        </button>
      </td>
    </tr>
    );
};

export default BlogsTable;