"use client";
import Link from "next/link";

export default function Appbar() {
  return (
    <div className="flex justify-between p-7     mx-auto   font-mono font-sans items-center w-[600px]  ">
      <div>Fake landing </div>
      <div className="flex justify-center gap-x-4 items-center ">
       
            <ul><Link href={"/"}>Home</Link></ul>
          <ul><Link href={"/"}>Dummy</Link></ul>
             <ul><Link href={"/"}>Home</Link></ul>
        
      </div>
    </div>
  );
}

