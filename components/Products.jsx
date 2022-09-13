import React, { useState } from "react";
import Image from "next/image";
import iconLeft from "../image/arrow-right-1.svg";
import iconRight from "../image/arrow-right.svg";

const BuyBlue = ({ data , children}) => {
  let [product, setProduct] = useState(data);
  if (product.length >= 6) {
    product.length = 4;
  }

  const handlerProjects = product.map((item) => {
    return (
      <div key={item.id} className="bg-white border  shadow rounded-md p-6">
        <Image src={item.img[2]} alt={item.name} width={250} height={250} />
        <div>
          <h1 className="text-xl font-bold">{item.name}</h1>
         <div className="flex items-center justify-between gap-4 ">
             <h2 className="font-bold md:text-xl my-2  mt-6"> {`$${item.priceAfterdiscount}.00`}</h2>
             <h2 className="font-meduim text-gray-500 md:text-xl my-2  line-through mt-6"> {item.price >= 350?`$${item.price}.00`:''}</h2>
         </div>
          <span className={item.inStock >= 1 ?"text-blue-600":"text-red-600"}>{item.inStock >= 1 ? 'in stock':'Out Of Stock'}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="container  py-16 ">
      {children}
      <div className="grid grid-cols-2 lg:grid-cols-4  py-10">
        {handlerProjects}
      </div>
      <div className=" justify-center items-center p-1 hidden lg:flex ">
        <Image src={iconLeft} alt="" className="cursor-pointer"/>
        <div className="flex space-x-7 rounded-full bottom-5 cursor-pointer  px-4 py-3">
        <span className="h-3 w-3  block rounded-full bg-gray-400"></span>
        <span className="h-3 w-3 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
        <span className="h-3 w-3 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
        <span className="h-3 w-3 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
        <span className="h-3 w-3 block rounded-full bg-gray-300 hover:bg-gray-400 transition-all cursor-pointer"></span>
      </div>
        <Image src={iconRight} alt="" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default BuyBlue;
