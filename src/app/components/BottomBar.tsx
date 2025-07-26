"use client ";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

// import {  } from "next/dist/shared/lib/hooks-client-context.shared-runtime"
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Settings", href: "/settings" },
  ];
  const pathname = usePathname();
  return (
    <div className="fixed  bg-white dark:bg-neutral-900 border rounded-full shadow-lg gap-4 z-50">
      {navItems.map((items) => {
        const isActive = pathname === items.href;

        return (
          <Link
            key={items.href}
            href={items.href}
            className="relative   px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
              {
                isActive&&  (
                     <motion.div
                layoutId="nav-bg"
                className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/30"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />  

                )
              }
               <span className="relative z-10">{items.name}</span>

          </Link>
        );
      })}
    </div>
  );
}
