import React from "react";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.png";
import img5 from "../img/img5.jpg";
import img4 from "../img/img4.jpg";
import Link from "next/link";
import { AfricaCards } from "./AfricaCards";

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
      id: 2,
      cover: img7,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
    {
      id: 3,
      cover: img4,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
    {
      id: 4,
      cover: img5,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
    {
      id: 5,
      cover: img5,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
    {
      id: 5,
      cover: img5,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
    {
      id: 5,
      cover: img5,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
    {
      id: 5,
      cover: img5,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
    },
  ];
  return (
    <div className="my-10">
      <Link
        href="africa-news"
        className="pl-3 border-l-[3px] border-green-600 text-lg font-bold text-gray-700 mb-6"
      >
        Africa News
      </Link>
      <div className="grid md:grid-cols-4 gap-4 mt-3">
        {africaNews?.map((news, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index}>
                <AfricaCards
                  cover={news.cover}
                  title={news.title}
                  description={news.description}
                  key={index}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Africa;
