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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="w-full max-w-sm border border-gray-200 rounded-2xl bg-white shadow-md p-6">
              <Image
                src="/eth-iso-color.png"
                alt="Currencies and commodities illustration"
                width={70}
                height={50}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Currencies & commodities
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Access a wide array of opportunities as you navigate the world
                of forex, cryptocurrencies, and commodities — each offering
                unique prospects for traders and investors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-sm border border-gray-200 rounded-2xl bg-white shadow-md p-6">
              <Image
                src="/sheild-iso-color.png"
                alt="Enterprise security illustration"
                width={70}
                height={50}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise-grade security
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                With our enterprise-grade security infrastructure, we prioritize
                the protection of your financial assets and sensitive
                information.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm border border-gray-200 rounded-2xl bg-white shadow-md p-6">
              <Image
                src="/explorer-iso-color.png"
                alt="Real-time trading illustration"
                width={70}
                height={50}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time trading
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Seamlessly navigate the dynamic world of financial markets as
                our advanced technology delivers live, up-to-the-second market
                data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefit;
