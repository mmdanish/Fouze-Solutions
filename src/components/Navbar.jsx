import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Fouze Solutions</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 hover:underline">Home</li>
        <li className="p-4 hover:underline">Company</li>        
        <li className="p-4 hover:underline">About</li>
        <li className="p-4 hover:underline">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] transform translate-x-0 ease-in-out duration-500"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] transform -translate-x-full ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Fouze Solutions</h1>
        <li className="p-4 border-b border-gray-600">Home</li>        
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
