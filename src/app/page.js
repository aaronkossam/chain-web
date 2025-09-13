import Image from "next/image";
import Heropage from "./HeroPage/page";
import Stat from "./Stats/page";
import Benefit from "./Benefits/page";
import Assetchoose from "./Assetchoose/page";
import Getstarated from "./GetStarted/page";

export default function Home() {
  return (
    <div>
      <Heropage />
      <Stat />
      <Benefit />
      <Assetchoose />
      <Getstarated />
    </div>
  );
}
