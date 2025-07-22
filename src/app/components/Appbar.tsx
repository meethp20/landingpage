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
      <div>Fake landing </div>
      <div></div>
      <div className="flex justify-center gap-x-4 opacity-0 lg:opacity-100 items-center ">
        <ul>
          <Link href={"/"}>Home</Link>
        </ul>
        <ul>
          <Link href={"/"}>Dummy</Link>
        </ul>
        <ul>
          <Link href={"/"}>Home</Link>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="opacity-100 lg:opacity-0"></div>

        <div onClick={() => onOpen(!open)}>
          <AnimatePresence>
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
        <ModeToggle />
      </div>
    </div>
  );
}
