import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const list = [
  {
    Icon1: (
      <Image src="/public/Protocol Icon.png" alt="" width={30} height={20} />
    ),
    Chain: "Energy Web (EWT)",
    Swap1: <Image src="/round-x.png" alt="" width={30} height={20} />,

    Sell: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Buy: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Earn: <Image src="/rounded.png" alt="" width={30} height={20} />,
  },
];

const list1 = [
  {
    Icon2: <Image src="/bit.png" alt="" width={30} height={20} />,

    Chain: "Bitcoin (BTC)",
    Swap: <Image src="/rounded.png" alt="" width={30} height={20} />,

    Sell: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Buy: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Earn: <Image src="/rounded.png" alt="" width={30} height={20} />,
  },
  {
    Icon3: <Image src="/ethr.png" alt="" width={30} height={20} />,

    Chain: "Ethereum (ETH)",
    Swap: <Image src="/rounded.png" alt="" width={30} height={20} />,

    Sell: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Buy: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Earn: <Image src="/rounded.png" alt="" width={30} height={20} />,
  },
  {
    Icon4: <Image src="/sol.png" alt="" width={30} height={20} />,

    Chain: "Solana (SOL)",
    Swap: <Image src="/rounded.png" alt="" width={30} height={20} />,

    Sell: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Buy: <Image src="/rounded.png" alt="" width={30} height={20} />,
    Earn: <Image src="/rounded.png" alt="" width={30} height={20} />,
  },
];

const Assetchoose = () => {
  return (
    <div>
      <section className=" mt-28 mb-3">
        <h1 className=" text-4xl font-medium ml-28">
          One Platform, Millions of Assets
        </h1>
        <p className=" ml-28 mt-2 font-light mb-2.5">
          As a leading self-custody multi-chain platform, we support millions of
          assets across 100+<br></br> blockchains. From Bitcoin, Ethereum, and
          Solana, Energy Web, Optimism, and much more
        </p>
        <div className="flex items-center ml-28 mr-28">
          <Input
            type="text"
            href="/"
            className="pt-2 pb-2"
            placeholder="Search Asset"
          />
          <Image
            src="/search-svgrepo-com.svg"
            alt=""
            width={20}
            height={20}
            className="  -ml-11"
          />
        </div>
        <div className="mt-8 ml-28 border rounded-md mr-28 mb-5 shadow-md pt-3.5 pb-3.5 pl-3.5 pr-3.5">
          <Table className="">
            <TableHeader>
              <TableRow className="w-full">
                <TableHead className="text-left">Chain</TableHead>
                <TableHead colSpan={4} className="text-right">
                  <div className="flex justify-end gap-14">
                    <span>Swap</span>
                    <span>Sell</span>
                    <span>Buy</span>
                    <span>Earn</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {list.map((list) => (
                <TableRow key={list}>
                  <TableCell className="w-full flex gap-2 ">
                    {list.Icon1}
                    <span className="py-1"> {list.Chain}</span>
                  </TableCell>

                  <TableCell colSpan={4} className="text-right">
                    <div className="flex justify-end gap-14">
                      <span>{list.Swap1}</span>
                      <sapn>{list.Sell}</sapn>
                      <sapn> {list.Buy}</sapn>
                      <sapn>{list.Earn}</sapn>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {list1.map((list1) => (
                <TableRow key={list1}>
                  <TableCell className="w-full flex gap-2 ">
                    {list1.Icon2}
                    {list1.Icon3}
                    {list1.Icon4}
                    <span className="py-1">{list1.Chain}</span>
                  </TableCell>

                  <TableCell colSpan={4} className="text-right">
                    <div className="flex justify-end gap-14">
                      <span> {list1.Swap}</span>
                      <sapn>{list1.Sell}</sapn>
                      <sapn> {list1.Buy}</sapn>
                      <sapn>{list1.Earn}</sapn>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Assetchoose;
