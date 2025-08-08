'use client'

import React from "react"
import BlueButton from "../buttons/blue";

interface TypeOneProps {
  title: React.ReactNode;
  button: string;
  image: string; // image URL from /public
  link?: string;
}

const TypeOne: React.FC<TypeOneProps> = ({ title, button, image, link = '#' }) => {
  return (
    <div
      className="rounded-[14px] h-[270px] shadow-md p-9 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: '100%, 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <h1 className="text-3xl font-extrabold leading-tight drop-shadow-md">
          {title}
        </h1>
        <div>
          <a href={link}>
            <BlueButton className="px-6 h-10">{button}</BlueButton>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TypeOne;