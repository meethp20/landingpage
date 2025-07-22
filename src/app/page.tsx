import Image from "next/image";
import HeroSection from "./components/Hero";
import Card from "./components/Card";
import { LampDemo } from "./components/lamp";

export default function Home() {
  return (
    <div className="lg:w-[600px] w-full mx-auto ">
      <div className="">
      <HeroSection />
      </div >

      <LampDemo />
      <div className=" mx-auto w-[300px] gap-5 grid grid-cols-2 md:grid-2 lg:grid-cols-2">
       <Card description="We are reliablly fast" title="Quick" />
         <Card description="We are reliablly fast" title="Quick" />
           <Card description="We are reliablly fast" title="Quick" />
           <Card description="We are reliablly fast" title="Quick" />  

      </div>
    </div>
  );
}
