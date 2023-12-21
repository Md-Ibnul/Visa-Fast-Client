import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { FaBookOpen, FaHome, FaUsers } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { IoMdAddCircle } from "react-icons/io";
import { FcFeedback } from "react-icons/fc";
import logo from '../../../assets/images/Logo-01.png'
import userImage from '../../../assets/images/profileImage.png'
import { AuthContext } from "../../../providers/AuthProviders";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, logOut, role } = useContext(AuthContext);
  const [isActive, setActive] = useState("false");
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  console.log(role);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img src={logo} alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={userImage}
                  alt="avatar"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {role && role === "Admin" ? (
              <nav>
                <ul className="ms-5 font-semibold">
                  <li className="my-2">
                    <NavLink to="/">
                      <FaHome className="inline me-2 text-xl"/>
                      Home
                    </NavLink>
                  </li>
                  <li className="my-3">
                    <NavLink to="/dashboard/manageUsers" className={({ isActive }) =>
                        isActive ? "text-red-600 border-b-2 border-b-yellow-500" : "default"
                      } ><FaUsers className="inline me-2 text-xl"/>Manage Users</NavLink>
                  </li>
                  <li className="my-3">
                    <NavLink to="/dashboard/manageBlogs" className={({ isActive }) =>
                        isActive ? "text-red-600 border-b-2 border-b-yellow-500" : "default"
                      }> <ImBook className="inline me-2 text-xl"/>
                      All Blogs
                    </NavLink>
                  </li>
                  <li className="my-3">
                    <NavLink to="/dashboard/addBlogs" className={({ isActive }) =>
                        isActive ? "text-red-600 border-b-2 border-b-yellow-500" : "default"
                      }> <IoMdAddCircle className="inline me-2 text-xl"/>
                      Add Blogs
                    </NavLink>
                  </li>
                </ul>
              </nav>
            ) : <nav></nav>
            }
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            {/* <span className="mx-4 font-medium">Profile</span> */}
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;