import React from "react";
import Image from "next/image";

const TechCards = ({ image }) => {
  return (
    <div>
      <div className="row-span-2 relative hover:opacity-90 bg-black cursor-pointer h-[350px]">
        <Image
          src={image}
          alt="image"
         fill
          className="object-fit"
        />
        <div className="absolute bottom-0 p-3 text-white bg-gradient-to-t from-black ">
          <h1 className="text-[30px] font-semibold leading-7 mb-2">
            Greek transport minister resigns after deadly train crash
          </h1>
          <p className="leading-6">
            The prime minister of Greece, Kyriakos Mitsotakis, has begun an
            address to the nation about the train crash.
          </p>
          <span className="pl-3 border-l-2 border-green-600 my-4 uppercase text-[12px] text-gray-200">
            Africa News
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechCards;
