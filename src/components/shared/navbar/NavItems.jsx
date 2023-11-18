import React from 'react';
import logo from '../../../assets/images/Logo-2.png';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import {RiTwitterXLine} from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom';

const NavItems = () => {
    const navOptions = (
        <>
        <li className='relative'><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink></li>
      <li><NavLink to='/destination' className={({ isActive }) => (isActive ? "active" : "default")}>Destination</NavLink></li>
      <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "default")}>About</NavLink></li>
      <li><NavLink to='/packages' className={({ isActive }) => (isActive ? "active" : "default")}>Packages</NavLink></li>
      <li><NavLink to='/contact' className={({ isActive }) => (isActive ? "active" : "default")}>Contact</NavLink></li>
        </>
    )
    let socialIconStyles1 = { color: "#1877f2", fontSize: "1.2em" };
    let socialIconStyles2 = { color: "#000000", fontSize: "1.2em" };
    let socialIconStyles3 = { color: "#3291c2", fontSize: "1.2em" };
    let socialIconStyles4 = { color: "#ff0000", fontSize: "1.2em" };
    const socialIcon = (
      <>
      <li><Link><FaFacebookF style={socialIconStyles1} /></Link></li>
      <li><Link><RiTwitterXLine style={socialIconStyles2} /></Link></li>
      <li><Link><FaLinkedinIn style={socialIconStyles3} /></Link></li>
      <li><Link><FaYoutube style={socialIconStyles4} /></Link></li>
      </>
    )
    let circleClasses = "inline-block p-4 rounded-full w-15 mx-auto";
  let iconStyles = { color: "white", fontSize: "1.5em" };
    return (
        <div className="navbar p-0 bg-base-100">
  <div className="navbar-start">
    <a className="mb-0">
        <img src={logo} alt="Logo" width={150} height={100} />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex gap-10">
    <ul className="menu-horizontal px-1 gap-8">
      {navOptions}
    </ul>
    <ul className='menu-horizontal px-1 gap-4'>
      {socialIcon}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="hidden lg:flex items-center gap-3">
        <div className='animate-bounce'>
        <a href="tel:+8801737564236">
        <span style={{ background: "#F58120" }} className={circleClasses}>
        <BsFillTelephoneFill style={iconStyles} />
      </span>
        </a>
        </div>
        <div>
            <a href='tel:+880173-7564-236'><h3 className='font-Urbanist font-bold text-gray-600'>Call Us</h3>
            <p className='font-Urbanist font-bold text-lg text-gray-500'>+8801737 564 236</p></a>
        </div>
    </div>
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
  </div>
</div>
    );
};

export default NavItems;