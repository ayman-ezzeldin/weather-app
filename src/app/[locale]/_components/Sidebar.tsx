"use client"
import Image from "next/image"


export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col items-centter justify-around ml-20 mt-20 w-1/4 h-[70vh] backdrop-blur-[5px] border-1 overflow-hidden rounded-3xl  text-white">
      <input type="text" placeholder="Search" className=" text-gray-300 font-sans border p-2 pl-5 focus:outline-none focus:border-gray-500 focus:shadow-md shadow-gray-600 rounded-3xl w-[70%] mx-auto" />
        <Image
          src="./log.svg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div></div>
      </div>
    </>
  )
}


