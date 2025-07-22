"use client";
import Link from "next/link";

export default function Appbar() {
  return (
    <div className="flex justify-between  items-center w-[600px]  ">
      <div>Fake landing </div>
      <div>
        <li>
            <ul><Link href={"/"}>Home</Link></ul>
          <ul><Link href={"/"}>Dummy</Link></ul>
             <ul><Link href={"/"}>Home</Link></ul>
        </li>
      </div>
    </div>
  );
}

