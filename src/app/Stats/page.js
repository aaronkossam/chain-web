import React from "react";
import Image from "next/image";
const Stat = () => {
  return (
    <div>
      <ul className=" flex justify-center gap-40 pt-6 mb-5 pb-6 bg-gray-100 ">
        <li>
          <p className="font-light">Trusted By</p>
          <p className=" text-red-700 text-center font-medium mt-1.5">
            15M+ user
          </p>
        </li>
        <li>
          <p className="font-light">Globally</p>
          <p className=" text-red-700 font-medium mt-1.5">Audited</p>
        </li>{" "}
        <li>
          {" "}
          <p className="font-light ">Top reviews</p>
          <Image
            src="/star.png"
            className="mt-3"
            width={80}
            height={20}
            alt=""
          />
        </li>{" "}
        <li>
          <p className="font-light">Founded in</p>
          <p className=" text-red-700 text-center font-medium mt-1.5">2018</p>
        </li>
      </ul>{" "}
    </div>
  );
};

export default Stat;
