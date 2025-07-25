import'use client'
import { ReactNode } from 'react';

export default function Card({ title, description, icon }: {
  title: string,
  description: string,
  icon?: ReactNode
}) {
  return (
    <div className="w-full max-w-xs h-[320px] flex flex-col items-center justify-center bg-gradient-to-br from-sky-900 via-black to-sky-800 border border-sky-700 rounded-2xl shadow-lg p-6 m-2 hover:scale-105 transition-transform duration-300">
      <div className="mb-4 text-4xl">{icon}</div>
      <div className="font-bold text-xl text-sky-400 mb-2 text-center">
        {title}
      </div>
      <div className="text-white/80 text-center">
        {description}
      </div>
    </div>
  );
}