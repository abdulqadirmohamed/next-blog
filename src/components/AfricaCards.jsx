import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AfricaCards = ({ cover, title, description, slug }) => {
  return (
    <div>
      <div className="relative h-80 group">
        <Link href={slug} className="cursor-pointer">
          <div className="relative h-40 w-full group-hover:opacity-90">
            <Image src={cover} fill className="object-cover" alt={title} />
          </div>
          <div className="mt-1">
            <h1 className="text-[20px] text-gray-700 font-bold leading-6 ">
              {title}
            </h1>
            <p className="text-gray-600 leading-5 mt-2 text-[15px]">
              {description}
            </p>
          </div>
        </Link>
        <span className="pl-3 absolute bottom-0 border-l-2 border-green-600  uppercase text-[12px] text-gray-700">
          africa
        </span>
      </div>
    </div>
  );
};
