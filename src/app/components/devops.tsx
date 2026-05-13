import React from "react";
import { Devops } from "../data/devops";
import Image from "next/image";

const DevopsDisplay = () => {
  return (
    <div className="relative cursor-pointer ">
      <div className="min-h-[200px] max-w-[440px] flex  items-center justify-center flex-wrap border-2 gap-1 shadow-2xl border-purple-400 rounded-xl  ">
        {Devops.map((item, index) => {
          return (
            <div
              className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl bg-white"
              key={index}
            >
              <Image
                src={item.icon}
                alt="react"
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <p className="md:text-md font-bold text-black">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className=" top-0 left-0 min-h-[200px] max-w-[440px] flex items-center justify-center flex-wrap border-2 gap-1 shadow-2xl border-purple-400  rounded-xl absolute hover:animate-scalefade">
        {Devops.map((item, index) => {
          return (
            <div
              className="flex flex-row gap-2 items-center justify-center invisible text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl bg-white"
              key={index}
            >
              <Image
                src={item.icon}
                alt="react"
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <p className="md:text-md font-bold text-black">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevopsDisplay;
