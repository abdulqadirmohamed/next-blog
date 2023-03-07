import React from "react";
import Image from "next/image";
import Img5 from "../img/img5.jpg";
import Img3 from "../img/img3.jpg";
import Img2 from "../img/img2.jpg";
import TechCards from "@/components/TechCards";
import { BiTime } from "react-icons/bi";
import TechCardLists from "@/components/TechCardLists";

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
    }
  ];
  return (
    <div className="grid row-auto">
      <h1 className="text-2xl font-bold my-4 uppercase">Technology</h1>
      {/* main */}
      <div className="grid md:grid-cols-2 gap-4">
        {techNews.map((news) => (
          <TechCards image={news.cover} />
        ))}
      </div>
      <div className="grid md:grid-cols-4 gap-4 my-2">
        {techNews.map((news) => (
         <TechCardLists/>
        ))}
      </div>
    

      {/* List Post */}

    
    </div>
  );
};

export default technology;
