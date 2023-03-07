import React from "react";
import Link from "next/link";
import Img2 from "../img/img2.jpg";
import Image from "next/image";
import { BiTime } from "react-icons/bi";

const TechCardLists = () => {
  return (

    
      <div className="relative h-80 group">
        <Link href="/" className="cursor-pointer">
          <div className="relative h-40 w-full group-hover:opacity-90">
            <Image src={Img2} fill className="object-cover" />
          </div>
          <div className="mt-1">
            <h1 className="text-[20px] text-gray-700 font-bold leading-6 line-clamp-3 ">
              Ocean treaty: Historic agreement reached after decade of talks
            </h1>
            <p className="text-gray-600 leading-5 mt-2 text-[15px] line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              officiis debitis aliquam culpa soluta. Aperiam?
            </p>
          </div>
        </Link>
        <span className="pl-3 absolute bottom-0 border-l-2 border-green-600  uppercase text-[12px] text-gray-700">
          africa
        </span>
      </div>
  );
};

export default TechCardLists;
