import React, { useState } from "react";
import Image from "next/image";
import IconLogo  from '../image/Logo.png'
import IconSearch from '../image/search.png'
import IconAccount from '../image/account.png'
import IconCart from '../image/cart.png'
import IconToggle from '../image/toggle.png'

const Navbar = () => {
  const [show,setShow] = useState(false)
  return (
    <div className="bg-black py-8 relative">
    <div className="container flex items-center justify-between    ">
      <h1 className=" h-8 w-10 flex justify-center items-center">
        <Image src={IconLogo} alt="logo"/>
      </h1>
      <div className="flex items-center ">
              <h1 className="lg:hidden cursor-pointer" onClick={() => setShow(!show)}><Image src={IconToggle} alt="IconToggle"/></h1>
              <div className={show ?'flex items-center  text-white show sll' :'flex items-center  text-white show '}>
              <div className="flex items-center  links divide-x ">
                    <ul className="flex items-center px-8 text-md gap-3 xl:gap-10 ">
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">Mac</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">iPad</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">iPhone</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">Watch</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">TV</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">Accessories</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">Offers</a>
                      </li>
                    </ul>
                    <ul className=" flex items-center px-8  gap-3 xl:gap-10  ">
                    <li className="hover:text-gray-400 transition ">
                        <a href="#">Support</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">Services</a>
                      </li>
                      <li className="hover:text-gray-400 transition ">
                        <a href="#">Locations</a>
                      </li>
                    </ul>
              </div>
              <div className="flex items-center xl:gap-2  xl:ml-10">
                    <a href="" className="w-8 h-8 flex justify-center items-center "><Image src={IconSearch} alt='search' /></a>
                    <a href="" className="w-8 h-8 flex justify-center items-center "><Image src={IconAccount} alt='search'/></a>
                    <a href="" className="w-8 h-8 flex justify-center items-center "><Image src={IconCart} alt='search'/></a>
              </div>
              </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
