import React from "react";
import Image from "next/image";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.png";

const Africa = () => {
  const africaNews = [
    {
      id: 1,
      cover: img6,
      title: "Exploring the rigging claims in Nigeria's elections",
      description:
        " How credible are the opposition claims of fraud in Nigeria's presidential election?",
    },
    {
      id: 1,
      cover: img7,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
  ];
  return (
    <div className="my-10">
      <h1 className="pl-3 border-l-2 border-red-600 text-lg font-bold text-gray-700 my-6">
        Africa News
      </h1>
      <div className="grid md:grid-cols-4 gap-4">
        {africaNews.map((news) => (
          <div className="relative">
            <Image src={news.cover} alt="" width={500} height={500} />
            <div className="mt-3">
              <h1 className="text-[20px] text-gray-700 font-bold leading-6">
                {news.title}
              </h1>
              <p className="text-gray-600 leading-5 mt-2 text-[15px]">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Africa;
