import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { getAllUsers } from '../../api/Auth';
import UserTable from './UserTable';

const ManageUsers = () => {
    const {user} = useContext(AuthContext);
    const [allUsers, setAllUsers] = useState([]);

    const fetchUsers = () => {
        getAllUsers()
        .then(data => {
          console.log(data);
            setAllUsers(data);
        })
    }
    useEffect(() => {
       fetchUsers()
    }, [user])
    return (
        <div className='container mx-auto px-4 sm:px-8'>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Index
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Image
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Role
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUsers &&
                  allUsers.map((user, index) => (
                    <UserTable
                      key={user._id}
                      user={user}
                      index={index}
                      fetchUsers={fetchUsers}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageUsers;