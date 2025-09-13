"use client";
import React from "react";
import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex">
          <Image src="/link-iso-color.png" alt="Logo" width={20} height={20} />
          <p className="ml text-2xl font-bold">forChains</p>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-500">Home</li>
            <li className="hover:text-blue-500">About</li>
            <li className="hover:text-blue-500">Pages</li>
            <li className="hover:text-blue-500">
              <select>
                <option>Features</option>
              </select>
            </li>
            <li className="hover:text-blue-500">Pricing</li>
          </ul>
        </nav>

        <div className=" flex space-x-4">
          <button className=" border-2  flex  text-black px-4 py-2 rounded-4xl ">
            <p className="flex gap-0.5 justify-baseline">
              {" "}
              <Image
                src="/globe-svgrepo-com.svg"
                alt="globe"
                width={15}
                height={15}
              />{" "}
              language
            </p>
          </button>

          <button className="bg-black text-white px-4 py-2 rounded-4xl">
            Download
          </button>
        </div>
      </div>

      <section className=" ml-20 mr-6 grid grid-cols-2 gap-6 items-center py-20">
        <div>
          <p style={{ fontSize: "3.5rem" }} className="  -mt-24 leading-16  ">
            Manage your{" "}
            <span className=" border-2 rounded-full pr-2 pl-2 border-red-200">
              digital
            </span>
            <br></br> asset with <br></br>
            <div className=" mr-64 mt-1  border-2 rounded-full pr-2 pl-2 border-red-200">
              confidence
            </div>
          </p>
          <p className=" text-xl mt-1 tracking-wide font-light">
            Seamlessly Secure Your Assets with <br></br>Our Cutting-Edge Web3
            Wallet{" "}
          </p>
          <div className="flex mt-4 gap-3">
            <button className=" border-2 bg-black flex text-white  border-black px-4 py-2 rounded-full ">
              <p className="flex gap-0.5 ">
                {" "}
                <Image
                  src="/mobile-alt-2-svgrepo-com.svg"
                  alt="globe"
                  width={30}
                  height={30}
                  className=" invert"
                />{" "}
                <p className=" leading-3.5  text-white">
                  {" "}
                  Download<br></br>
                  Mobile App{" "}
                </p>
              </p>
            </button>
            <button className=" border-2 bg-black flex text-white  border-black px-4 py-2 rounded-full ">
              <p className="flex gap-1 justify-baseline">
                {" "}
                <Image
                  className=" invert"
                  src="/desktop-svgrepo-com.svg"
                  alt="globe"
                  width={30}
                  height={30}
                />{" "}
                <p className="leading-3.5 pt text-white">
                  Download<br></br>
                  Extension{" "}
                </p>
              </p>
            </button>
          </div>
        </div>

        <Image
          src="/Frame 10.png"
          alt="frame"
          className=" "
          width={600}
          height={300}
        />
      </section>
    </div>
  );
};

export default HeroPage;
