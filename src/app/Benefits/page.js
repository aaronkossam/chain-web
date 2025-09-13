import React from "react";
import Image from "next/image";
const Benefit = () => {
  return (
    <div>
      <section
        className="bg-cover mb-2 -mt-5 pt-32 pl-28 pr-28 pb-7"
        style={{ background: "var(--benefit)" }}
      >
        <div className=" flex justify-between">
          <div>
            <h2 className="text-white text-4xl ">
              Solution for buying, trading, and<br></br>
              investing in digital assets
            </h2>
          </div>
          <div>
            <p className=" text-light font-light text-white">
              Forchains helps you guide your saving <br></br>
              activity with secured and easily
            </p>
            <button className="bg-white mt-1.5  text-black px-6 py-3 rounded-full font-light hover:bg-gray-200 transition">
              Try it Today
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-3.5 pt-6">
          <div className=" max-w-sm w-full sm:max-w-md lg:max-w-lg  border-2 rounded-2xl pl-3 pt-10 pb-2.5 pr-3 border-white bg-white">
            <Image src="/eth-iso-color.png" alt="" width={70} height={50} />
            <h1 className=" font-medium pb-1.5 text-xl">
              Currencies & <br></br>
              commodities
            </h1>
            <p className=" text-light pb-3">
              Access a wide array of opportunities as you<br></br>
              navigate the world of forex,
              <br />
              cryptocurrencies, and commodities, each<br></br>
              offering unique prospects for traders and investors.
            </p>
          </div>

          <div className=" max-w-sm w-full sm:max-w-md lg:max-w-lg  border-2 rounded-2xl pl-3 pt-10 pb-2.5 pr-3 border-white bg-white">
            <Image src="/sheild-iso-color.png" alt="" width={70} height={50} />
            <h1 className=" font-medium pb-1.5 text-xl">
              Enterprise grade<br></br> security
            </h1>
            <p className=" text-light pb-3">
              With our enterprise-grade security<br></br>
              infrastructure, we prioritize the protection <br></br>of your
              financial assets and sensitive information.
            </p>
          </div>
          <div className=" max-w-sm w-full sm:max-w-md lg:max-w-lg  border-2 rounded-2xl pl-3 pt-10 pb-2.5 pr-3 border-white bg-white">
            <Image
              src="/explorer-iso-color.png"
              alt=""
              width={70}
              height={50}
            />
            <h1 className=" font-medium pb-1.5 text-xl">
              Real-time <br></br>trading
            </h1>
            <p className=" text-light pb-3">
              Seamlessly navigate the dynamic<br></br>
              world of financial markets as our<br></br> advanced technology
              delivers live, up-<br></br>to-the-second market data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefit;
