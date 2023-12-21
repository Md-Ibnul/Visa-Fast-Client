import React, { useEffect, useState } from "react";
import Container from "../../shared/container/container";
import { useContext } from "react";
import AuthProvider from "../../../providers/AuthProviders";
import { getAllBlogs } from "../../../api/Blog";
import BlogsTable from "../BlogsTable";

const ManageBlogs = () => {

    const [allBlogs, setAllBlogs] = useState([]);
    const fetchBlogs = () => {
        getAllBlogs()
        .then(data => {
            setAllBlogs(data);
        })
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

  return (
    <Container>
      <div className="mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Index
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Blog's Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Blog's Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allBlogs &&
                    allBlogs.map((blg, index) => (
                      <BlogsTable
                        key={blg._id}
                        blg={blg}
                        index={index}
                        fetchBlogs={fetchBlogs}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ManageBlogs;
