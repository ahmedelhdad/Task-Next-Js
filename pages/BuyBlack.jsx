import React from "react";
import Products from "../components/Products";
import Image from "next/image";
import Phone from "../image/Screen Shot 2021-11-21 at 10.07.49 PM.png";
import Heart from "../image/heart.svg";
import Startfull from "../image/star.svg";
import StartEmpty from "../image/star-3.svg";
import Cib from '../image/CIB.png'
import Car from '../image/car.svg'
import Convert from '../image/convert.svg'
export const getStaticProps = async () => {
  const res = await fetch(
    "https://63189f2cf6b281877c71eab0.mockapi.io/products"
  );
  const data = await res.json();
  return {
    props: { products: data },
  };
};
const BuyBlack = ({ products }) => {
  return (
    <div className="pt-16">
      <div className="container grid grid-cols-1 lg:grid-cols-7 gap-y-8 ">
        <div className="col-span-4 flex  items-center md:items-start justify-between">
          <div className="h-full  w-28  ">
            <Image src={Phone} alt="Phone" className="w-full" />
            <Image src={Phone} alt="Phone" />
            <Image src={Phone} alt="Phone" />
            <Image src={Phone} alt="Phone" />
            <Image src={Phone} alt="Phone" />
          </div>

          <div className="h-96 w-[90%]  flex justify-center">
            <Image src={Phone} alt="Phone" className="" />
          </div>
        </div>

        <div className="col-span-3 space-y-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-500 uppercase">Apple</h1>
            <Image src={Heart} alt="Heart" />
          </div>
          <h1 className="font-bold ">
            Apple-iPhone 13 Pro 5G 128GB <br /> Sierra Blue (Verizon){" "}
          </h1>
          <div className="flex items-center gap-x-1">
            <Image src={Startfull} alt="Startfull" />
            <Image src={Startfull} alt="Startfull" />
            <Image src={Startfull} alt="Startfull" />
            <Image src={StartEmpty} alt="StartEmpty" />
            <Image src={StartEmpty} alt="StartEmpty" />
            <span className="text-gray-400 text-sm ml-2">(506 Reviews)</span>
          </div>
          <h1 className="text-3xl font-bold text-black">$2,500</h1>
          <span className="text-gray-400 block text-sm">In Stock</span>
          <div className="flex gap-x-4 items-center">
            <div className="border border-black rounded-full  w-6 h-6 flex items-center justify-center">
              <span className="text-xl font-bold mb-1">+</span>
            </div>{" "}
            <div className="text-2xl">1</div>
            <div className="border border-black rounded-full  w-6 h-6 flex items-center justify-center">
              <span className="text-xl font-bold mb-5">_</span>
            </div>
          </div>
          <div className="flex item-center gap-3">
            <div className="text-gary-400 border  rounded-lg px-4 text-gray-400 h-20 w-28 flex justify-center items-center border-gray-400"><span>Full Price</span></div>
            <div className="text-gary-400 border  rounded-lg px-4  h-20 w-28 flex justify-center items-center border-black font-bold"><span>Installments</span></div>
          </div>
          <div className="flex item-center gap-3">
            <div className=" border  rounded-lg px-4  h-20 w-28 flex justify-center items-center border-gray-400">
              <Image src={Cib} alt='CIB'/>
            </div>
            <div className=" border  rounded-lg px-4  h-20 w-28 flex justify-center items-center border-gray-400">
              <Image src={Cib} alt='CIB'/>
            </div>
            <div className=" border  rounded-lg px-4  h-20 w-28 flex justify-center items-center border-gray-400">
              <Image src={Cib} alt='CIB'/>
            </div>
            <div className=" border  rounded-lg px-4  h-20 w-28 flex justify-center items-center border-gray-400">
              <Image src={Cib} alt='CIB'/>
            </div>
          </div>
          <div className="flex item-center flex-col gap-3 ">
              <h1 className="text-black font-bold">Memory</h1>
              <div className="flex item-center gap-3">
              <div className="text-gary-400 border  rounded-lg px-4  h-20 w-20  lg:w-28 flex flex-col justify-center items-center border-black font-bold">
                <h1 className="font-bold text-lg">128G</h1>
                <h1 className="text-gray-600 tracking-wide  ">$999.00</h1>
              </div>
              <div className="text-gary-400 border rounded-lg px-4  h-20  w-20 lg:w-28 flex flex-col justify-center items-center border-gray-400 text-gray-400 font-bold">
                <h1 className="font-bold text-lg">256G</h1>
                <h1 className=" tracking-wide  ">$999.00</h1>
              </div>
              <div className="text-gary-400 border rounded-lg px-4  h-20  w-20 lg:w-28  flex flex-col justify-center items-center border-gray-400 text-gray-400 font-bold">
                <h1 className="font-bold text-lg">512G</h1>
                <h1 className=" tracking-wide  ">$999.00</h1>
              </div>
              <div className="text-gary-400 border rounded-lg px-4  h-20 w-20 lg:w-28  flex flex-col justify-center items-center border-gray-400 text-gray-400 font-bold">
                <h1 className="font-bold text-lg">1TB</h1>
                <h1 className=" tracking-wide  ">$999.00</h1>
              </div>

              </div>
          </div>
          <div className="flex item-center flex-col gap-3">
              <h1 className="text-black font-bold">Color</h1>
              <div className="flex item-center gap-3">
              <div className="text-gary-400 border rounded-lg px-4 space-y-1  h-20 w-28 flex flex-col justify-center items-center border-gray-400 text-gray-400 font-bold">
              <h1 className="font-bold text-lg">Sliver</h1>
              <h1 className=" tracking-wide w-8 h-8 border border-gray-500 bg-slate-200 rounded-full "></h1>
            </div>
 
              <div className="text-gary-400 border space-y-2  rounded-lg px-4  h-20 w-28 flex flex-col justify-center items-center border-black font-bold">
              <h1 className="font-bold text-sm">Sierra Blue</h1>
              <h1 className=" tracking-wide w-8 h-8 border border-gray-500 bg-brown rounded-full "></h1>
              </div>
              </div>
          </div>
          <div className="flex item-center flex-col gap-3 border-b pb-8">
              <h1 className="text-black font-bold">Insurance</h1>
              <div className="flex item-center gap-3">
              <div className="text-gary-400 border  rounded-lg px-4  h-20 w-28 flex flex-col justify-center items-center border-gray-400 font-bold">
                <h1 className="font-bold text-lg">1 year</h1>
                <h1 className="text-gray-500 tracking-wide  ">$99.00</h1>
              </div>
              <div className="text-gary-400 border rounded-lg px-4  h-20 w-28 flex flex-col justify-center items-center border-black font-bold">
                <h1 className="font-bold text-lg">2 year</h1>
                <h1 className=" text-gray-500 tracking-wide  ">$159.00</h1>
              </div>    
              </div>
              <button className="bg-black text-md border mt-3 border-black hover:text-black hover:bg-transparent transition-all text-white py-3 rounded-md">Add to cart</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-400">
              <Image src={Car} alt='Car'/>
              <span className="text-sm md:text-md">Free Shipping arrives by Tue, Nov 23</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <Image src={Convert} alt='Car'/>
              <span className="text-sm md:text-md">Free 10-day return window starts Dec 26th Details</span>
            </div>
          </div>
        </div>
      </div>
      <Products data={products} />
    </div>
  );
};

export default BuyBlack;
