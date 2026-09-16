import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = ({ darkMode, setDarkMode, timer }) => {

  // ✅ sidebar open/close track karne ke liye
  const [sidebar, setSidebar] = useState(false);

  // convert hours || minutes || seconds
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50">
      {/* ================top content ========= */}
      <div className='bg-[#433d3d] flex justify-between w-full text-[13px] sm:text-[17px]   md:text-[20px] lg:text-22px[]  '>
        <div className='w-[30%] ml-[10px] sm:ml-[14px] md:-[16px]  lg:ml-[20px] flex gap-x-[30px] text-white hidden sm:block md:block lg:block'>
          <select className='bg-[#433d3d] hidden sm:block md:block lg:block'>
            <option>Etherum</option>
            <option>Bitski</option>
            <option>Formatic</option>
          </select>

          <select className='bg-[#433d3d]'>
            <option>English</option>
            <option>USA</option>
            <option>France</option>
          </select>
        </div>

        <div className='text-white flex gap-x-10'>
          <p className=' hidden sm:block  md:block lg:block '>New Product Coming Soon</p>
          <h2>{formatTime(timer)}</h2>
          <p className='flex gap-10 mr-[20px]'>
            <img src="communication.png" alt="Facebook" className='w-[30px] h-[30px]' />
            <img src="instagram.png" alt="Facebook" className='w-[30px] h-[30px]' />
            <img src="linkedin.png" alt="Facebook" className='w-[30px] h-[30px]' />
            <img src="youtube.png" alt="Facebook" className='w-[30px] h-[30px]' />
            <img src="tiktok.png" alt="Facebook" className='w-[30px] h-[30px]' />
          </p>
        </div>
      </div>

      {/* ===================================navbar================= */}
      <nav
        className={`flex justify-between items-center px-4 transition-colors duration-300 ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <img src="logo_dark.png" alt="logo" className='w-[120px] sm:w-[160px] md:w-[200px] bg-black rounded-[20px]' />

        <input
          type="search"
          placeholder='search'
          className='hidden lg:block bg-gradient-to-r from-[#7c3aed] to-red-400 h-[40px] text-black rounded-[40px] text-center px-4'
        />

      
        <ul className={`
          ${sidebar ? "flex" : "hidden"} 
          md:flex flex-col md:flex-row
          gap-4 md:gap-x-[30px]
          absolute md:static top-[70px] right-0 md:top-0
          bg-[#2f2b2b] md:bg-transparent
          p-6 md:p-0
          text-[18px] md:text-[22px]
          
        `}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/page">Page</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <p className='hidden sm:block bg-[#f57e92] w-[120px] h-10 text-center p-1 text-[14px] rounded-[30px] bg-gradient-to-r from-[#7c3aed] to-red-400'>
          Connect Wallet
        </p>

        <div className="flex items-center gap-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='text-[22px] sm:text-[26px]'
          >
            {darkMode ? <FaSun color="gold" /> : <FaMoon color="white" />}
          </button>

          {/* ✅ HAMBURGER BUTTON (Header.jsx se copy kiya) */}
          <p
            className='text-[26px] w-[40px] h-[40px] bg-[#56df7a] rounded-[10px] flex items-center justify-center md:hidden cursor-pointer'
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <HiOutlineX /> : <HiOutlineMenu />}
          </p>
        </div>
      </nav>

      </div>
    </>
  )
}

export default Navbar