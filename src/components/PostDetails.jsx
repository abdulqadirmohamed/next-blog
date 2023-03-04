import Image from "next/image";
import cover from "../img/img1.jpg";
import React from "react";
import { BiTime } from "react-icons/bi";

const PostDetails = () => {
  return (
    <div className="divide-y">
      {/* Header */}
      <div>
        <h1 className="text-[30px] font-bold leading-10">
          Bahrain Grand Prix: Fernando Alonso edges out Red Bulls in practice
          but plays down pole hopes
        </h1>
        <div className="flex gap-4 my-4  text-sm text-gray-500">
          <div className="flex items-center">
            <BiTime />
            <p className="ml-1">19 minutes ago</p>
          </div>
          <div className="border-l-[1px] pl-4">
            <p>African News</p>
          </div>
        </div>
      </div>
      <hr />
      {/* Body */}
      <div className="mt-5">
        <div className="relative md:h-96 h-64 w-full  ">
          <Image src={cover} alt="africa image" fill className="object-cover" />
        </div>
        <p className="my-2 font-bold">
          Fernando Alonso has rejected the idea that he could start the Bahrain
          Grand Prix from pole position despite setting the pace in Friday
          practice.
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
