import React from 'react';
import { FaUser, FaUserSecret } from 'react-icons/fa';
import { GiCrossMark } from "react-icons/gi";
import userImage from '../../assets/images/profileImage.png';
import Swal from 'sweetalert2';

const UserTable = ({user, fetchUsers, index}) => {

    const handleMakeAdmin = user => {
        Swal.fire({
            title: `${user.name} make Admin?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/Admin/${user._id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                fetchUsers();
                Swal.fire(
                    'Admin!',
                    `${user.name} is Admin now!`,
                    'success'
                  )
            }
        })
              
            }
          })
        
      };
    const handleDelete = user => {
        Swal.fire({
            title: `${user.name} Delete?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                fetchUsers();
                Swal.fire(
                    'Delete!',
                    `${user.name} is Deleted!`,
                    'success'
                  )
            }
        })
              
            }
          })
        
      }

    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{index+1}</p>

          </div>
        </td>
        <td className=' py-5 border-b border-gray-200 bg-white text-sm'>
          
        <div className='block relative'>
              <img
                alt='profile'
                src={userImage}
                className='mx-auto object-cover rounded h-14 w-14 '
              />
            </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap flex items-center'>
             {user?.role ? <span><FaUserSecret className='me-1 inline text-md'/> {user?.role}</span> : <span><FaUser className='me-1 inline text-md'/> User</span>}
          </p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {user?.role === "Admin" ? <h4>Already Admin</h4>: <button onClick={() => handleMakeAdmin(user)} disabled={user.role == 'Admin'} className='btn btn-xs bg-orange-600 text-white hover:text-black whitespace-no-wrap flex items-center'>
           <FaUserSecret className='text-md'/>Make Admin
          </button>}
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={() => handleDelete(user)} className='btn btn-xs bg-red-600 text-white hover:text-black whitespace-no-wrap flex items-center'>
           <GiCrossMark className='text-md'/> Delete User
          </button>
        </td>
        
      </tr>
    );
};

export default UserTable;