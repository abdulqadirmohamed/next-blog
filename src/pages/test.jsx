import React from "react";
import Image from "next/image";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
import Img4 from "../img/img4.jpg";
import Img5 from "../img/img5.jpg";
const test = () => {
  const africaNews = [
    {
      id: 1,
      cover: Img5,
      title: "Exploring the rigging claims in Nigeria's elections",
      slug: "Exploring-the-rigging",
      description:
        " How credible are the opposition claims of fraud in Nigeria's presidential election?",
        tags: 'africa'
    },
    {
      id: 2,
      cover: Img2,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      slug: "Africa-live",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
        tags: 'science'
    },
    {
      id: 3,
      cover: Img3,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      slug: "Africa-live",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
        tags: 'Europe'
    },
    {
      id: 3,
      cover: Img4,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      slug: "Africa-live",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
        tags: 'Lating America'
    },
    {
      id: 3,
      cover: Img1,
      title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
      slug: "Africa-live",
      description:
        "The Labour Party presidential candidate finished third in the poll - and more stories.",
        tags: 'africa'
    },
  ]
    // console.log(items)
  return (
    <div className="wrapper  h-[400px]">
    {africaNews.map((news, index) => (
      <div className="grid md:grid-col-2 relative hover:opacity-90 cursor-pointer">
        <Image src={news.cover} alt="image" fill />
        <div className="absolute bottom-0 p-3 text-white bg-gradient-to-t from-black ">
          <h1 className="text-[30px] font-semibold leading-7 mb-2 line-clamp-2">
            Greek transport minister resigns after deadly train crash
          </h1>
          <p className="leading-6 line-clamp-2 pragraph_hidden">
            The prime minister of Greece, Kyriakos Mitsotakis, has begun an
            address to the nation about the train crash.
          </p>
          <span className="pl-3 border-l-2 border-green-600 my-4 uppercase text-[12px] text-gray-200">
            {news.tags}
          </span>
        </div>
      </div>
    ))}
  </div>
  );
};

export default test;
