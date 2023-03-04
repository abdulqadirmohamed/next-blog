import React from "react";
import Link from "next/link";
import Image from "next/image";

import img6 from "../img/img6.jpg";
import img1 from "../img/img6.jpg";

const TopStories = () => {
  const africaNews = [
    {
      id: 1,
      cover: img6,
      title: "Exploring the rigging claims in Nigeria's elections",
      slug: "Exploring-the-rigging",
      description:
        " How credible are the opposition claims of fraud in Nigeria's presidential election?",
    },
    {
      id: 2,
      cover: img1,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      slug: "Africa-live",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
  ];
  return (
    <div className="mt-5 w-full">
      {africaNews.map((news) => (
        <Link href="/">
          <div className="text-lg font-medium w-full bg-gray-100 my-3 p-5 hover:underline hover:text-red-600">
            {news.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopStories;
