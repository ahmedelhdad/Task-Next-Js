import React from "react";
import Image from "next/image";
import iconLeft from "../image/arrow-right-1.svg";
import iconRight from "../image/arrow-right.svg";
const Landing = () => {
  return (
    <div className='relative bg-[url("../image/Background.png")] flex items-center  bg-cover bg-no-repeat bg-center h-96'>
      <div className="container  flex items-center justify-between w-full  invisible md:visible">
        <div className="bg-gray-200 hover:bg-gray-300 transition-all rounded-full flex justify-center items-center p-1  cursor-pointer">
          <Image src={iconLeft} alt="" />
        </div>
        <div className="bg-gray-200 hover:bg-gray-300 transition-all rounded-full flex justify-center items-center p-1 mr-2  cursor-pointer">
          <Image src={iconRight} alt="" />
        </div>
      </div>
      <div className="bg-white absolute left-[50%] translate-x-[-50%] flex space-x-7 rounded-full bottom-5  px-4 py-3">
        <span className="h-4 w-4 block rounded-full bg-gray-400"></span>
        <span className="h-4 w-4 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
        <span className="h-4 w-4 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
        <span className="h-4 w-4 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
        <span className="h-4 w-4 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
      </div>
    </div>
  );
};

export default Landing;

