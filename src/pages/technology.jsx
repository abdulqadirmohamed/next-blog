import React from "react";
import Image from "next/image";
import Img5 from "../img/img5.jpg";
import Img3 from "../img/img3.jpg";
import Img2 from "../img/img2.jpg";
import TechCards from "@/components/TechCards";
import { BiTime } from "react-icons/bi";

const technology = () => {
  const techNews = [
    {
      id: 1,
      cover: Img5,
      title: "Exploring the rigging claims in Nigeria's elections",
      slug: "Exploring-the-rigging",
      description:
        " How credible are the opposition claims of fraud in Nigeria's presidential election?",
      tags: "africa",
    },
    {
      id: 2,
      cover: Img3,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      slug: "Africa-live",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
      tags: "science",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 uppercase">Technology</h1>
      {/* main */}
      <div className="grid md:grid-cols-2 gap-4 row-span-2 h-[350px]">
        {techNews.map((news) => (
          <TechCards image={news.cover} />
        ))}
      </div>

      {/* List Post */}
      <div className="my-4 grid grid-cols-6 gap-4">
        <div className="flex items-center gap-4 col-span-4">
          <div className="relative">
            <Image src={Img2} height={250} alt="new image" />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold text-gray-700 leading-6">
              Africa Live: Obi plans to challenge Tinubu's Nigeria victory
            </h1>
            <div className="flex gap-4 my-2  text-sm text-gray-500">
              <div className="flex items-center">
                <BiTime />
                <p className="ml-1">19 minutes ago</p>
              </div>
              <div className="border-l-[1px] pl-4">
                <p>African News</p>
              </div>
            </div>
            <p className="leading-5 text-gray-600 line-clamp-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut
              perspiciatis magnam repellat, recusandae iure quia unde
              necessitatibus ea sed.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut
              perspiciatis magnam repellat, recusandae iure quia unde
              necessitatibus ea sed.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut
              perspiciatis magnam repellat, recusandae iure quia unde
              necessitatibus ea sed.
            </p>
          </div>
        </div>
        <div>side</div>
      </div>
    </div>
  );
};

export default technology;
