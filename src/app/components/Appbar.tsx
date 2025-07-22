"use client";
import Link from "next/link";
import { ModeToggle } from "./Themetoggle";
import { Menu } from "lucide-react";
export default function Appbar() {
  return (
    <div className="flex justify-between p-7     mx-auto   font-mono  items-center  lg:w-[600px]  ">
      <div>Fake landing </div>
      <div>

      </div>
      <div className="flex justify-center gap-x-4 opacity-0 lg:opacity-100 items-center ">
       
            <ul><Link href={"/"}>Home</Link></ul>
          <ul><Link href={"/"}>Dummy</Link></ul>
             <ul><Link href={"/"}>Home</Link></ul>
        
      </div>
        <div>
        
        <ModeToggle />
      </div>
    </div>
  );
}

