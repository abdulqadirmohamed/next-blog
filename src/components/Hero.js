import React from "react";
import Image from "next/image";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
import Img4 from "../img/img4.jpg";
import Img5 from "../img/img5.jpg";

export const Hero = () => {
  return (
    <div className="gridCard">
      <div className="grid md:grid-cols-4 md:gap-4 mt-6">
        <div className="md:col-span-2 row-span-3 relative hover:opacity-90 bg-black cursor-pointer">
          <Image src={Img5} alt="image" width={500} height={500} />
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
        <div className="relative md:border-0 border-b-[1px] py-2 md:py-0 border-gray-200">
          <Image
            src={Img2}
            alt="image"
            className="hidden md:block"
            width={500}
            height={500}
          />
          <div className="md:absolute bottom-0 py-2 px-3 text-gray-800 md:text-white md:bg-gradient-to-t from-black ">
            <h1 className="md:text-[20px] text-[18px] md:font-semibold font-bold leading-6 ">
              Greece train crash: What we know so far
            </h1>
            <span className="pl-3 border-l-2 border-red-600 my-2 uppercase text-[12px] md:text-gray-200 text-gray-600">
              somalia
            </span>
          </div>
        </div>
        <div className="relative md:border-0 border-b-[1px]  md:py-0 border-gray-200">
          <Image
            src={Img3}
            alt="image"
            className="hidden md:block"
            width={500}
            height={500}
          />
          <div className="md:absolute bottom-0 py-2 px-3 text-gray-800 md:text-white md:bg-gradient-to-t from-black ">
            <h1 className="md:text-[20px] text-[18px] md:font-semibold font-bold leading-6 ">
              Greece train crash: What we know so far
            </h1>
            <span className="pl-3 border-l-2 border-red-600 my-2 uppercase text-[12px] md:text-gray-200 text-gray-600">
              somalia
            </span>
          </div>
        </div>
        <div className="relative md:border-0 border-b-[1px]  md:py-0 border-gray-200">
          <Image
            src={Img4}
            alt="image"
            className="hidden md:block"
            width={500}
            height={500}
          />
          <div className="md:absolute bottom-0 py-2 px-3 text-gray-800 md:text-white md:bg-gradient-to-t from-black ">
            <h1 className="md:text-[20px] text-[18px] md:font-semibold font-bold leading-6 ">
              Greece train crash: What we know so far
            </h1>
            <span className="pl-3 border-l-2 border-red-600 my-2 uppercase text-[12px] md:text-gray-200 text-gray-600">
              somalia
            </span>
          </div>
        </div>
        <div className="relative md:border-0 border-b-[1px]  md:py-0 border-gray-200">
          <Image
            src={Img5}
            alt="image"
            className="hidden md:block"
            width={500}
            height={500}
          />
          <div className="md:absolute bottom-0 py-2 px-3 text-gray-800 md:text-white md:bg-gradient-to-t from-black ">
            <h1 className="md:text-[20px] text-[18px] md:font-semibold font-bold leading-6 ">
              Greece train crash: What we know so far
            </h1>
            <span className="pl-3 border-l-2 border-red-600 my-2 uppercase text-[12px] md:text-gray-200 text-gray-600">
              somalia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
