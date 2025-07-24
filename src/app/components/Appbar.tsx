"use client";
import Link from "next/link";
import { ModeToggle } from "./Themetoggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { forwardRef } from "react";
import { LucideProps } from "lucide-react";
import { X } from "lucide-react";

const MotionX = motion(
  forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
    <X ref={ref} {...props} />
  ))
);

const MotionMenu = motion(
  forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
    <Menu ref={ref} {...props} />
  ))
)

export default function Appbar() {
  const [open, onOpen] = useState(false);

  return (
    <div className="flex justify-between p-7  mx-auto font-mono items-center lg:w-[600px]  ">
      <Link href="/" className="flex items-center" aria-label="Home">
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="18" width="36" height="28" rx="4" fill="#0ff" stroke="#00f" strokeWidth="2"/>
          <circle cx="24" cy="30" r="4" fill="#000" />
          <circle cx="40" cy="30" r="4" fill="#000" />
          <rect x="28" y="38" width="8" height="2" rx="1" fill="#000"/>
          <line x1="32" y1="10" x2="32" y2="18" stroke="#00f" strokeWidth="2"/>
          <circle cx="32" cy="8" r="2" fill="#00f"/>
          <line x1="14" y1="24" x2="6" y2="24" stroke="#00f" strokeWidth="2"/>
          <line x1="50" y1="24" x2="58" y2="24" stroke="#00f" strokeWidth="2"/>
        </svg>
      </Link>
      <div></div>
      <div className="flex justify-center gap-x-4 opacity-0 lg:opacity-100 items-center ml-20 ">
        <ul>
          <Link href="/" className="px-4 py-2 rounded-md text-sky-200 hover:text-sky-400 hover:bg-sky-800 transition-colors">Home</Link>
        </ul>
        <ul>
          <Link href="/" className="px-4 py-2 rounded-md text-sky-200 hover:text-sky-400 hover:bg-sky-800 transition-colors">Dummy</Link>
        </ul>
        <ul>
          <Link href="/" className="px-4 py-2 rounded-md text-sky-200 hover:text-sky-400 hover:bg-sky-800 transition-colors">Home</Link>
        </ul>
      </div>
      <div className="flex items-center gap-x-4 justify-center">
        <div className=" gap-x-4  "></div>
        <div className="block lg:hidden" onClick={() => onOpen(!open)}>
          <AnimatePresence mode="wait">
            {open ? (
              <MotionX
                key="X"
                size={24}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <MotionMenu
                key="Menu"
                size={24}
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
