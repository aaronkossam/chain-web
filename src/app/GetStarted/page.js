import React from "react";
import Image from "next/image";
const Getstarated = () => {
  return (
    <div>
      <section className=" ml-28 mr-28 mb-8">
        <h1 className="  mt-20  text-4xl">
          Get started with Web3 wallet in 3 easy steps
        </h1>
        <p className=" mt-2 font-light ">
          As the cryptocurrency ecosystem continues to evolve, it&apos;s
          essential for users to stay<br></br> informed, exercise caution, and
          adopt best practices for managing and securing their <br></br>digital
          assets in this exciting and dynamic financial frontier
        </p>

        <div className=" flex gap-5 mt-6 justify-center">
          <div className="grid gap-5 pt-2 pb-2">
            <div className=" border p-3 rounded-md flex gap-7">
              <Image src="/num one.png" alt="" width={65} height={100} />
              <div>
                <p>
                  <p className=" font-medium">Create your account</p>
                  <span className=" font-light text-md ">
                    Started with create the account on the Forchains<br></br>{" "}
                    app that navigate your digital assets and invest them
                  </span>
                </p>
              </div>
            </div>

            <div className=" border p-3 rounded-md flex gap-7">
              <Image src="/num two.png" alt="" width={65} height={20} />
              <div>
                <p>
                  <p className=" font-medium">Create your first wallet</p>
                  <span className=" font-light text-md ">
                    By create wallet, you are able to take action consist of
                    <br></br>
                    buying, trading, and investing
                  </span>
                </p>
              </div>
            </div>
            <div className=" border p-3 rounded-md flex gap-7">
              <Image src="/num three.png" alt="" width={65} height={20} />
              <div>
                <p>
                  <p className=" font-medium">Create your account</p>
                  <span className=" font-light text-md ">
                    Any asset that you chosen on the market such as<br></br>{" "}
                    Crypto.com, Solana, Ethereum, Energy Web, and etc
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image src="/iphone.png" alt=" " width={300} height={400} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Getstarated;
