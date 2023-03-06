import React from "react";

const test = () => {
    const africaNews = [
        {
          id: 1,
          title: "Exploring the rigging claims in Nigeria's elections",
        },
        {
          id: 2,
          title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
        },
        {
          id: 3,
          title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
        },
        {
          id: 4,
          title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
        },
        {
          id: 5,
          title: "Africa Live: Obi plans to challenge Tinubu's Nigeria victory",
        },
      ];
    // console.log(items)
  return (
    <div className="wrapper">
      {africaNews.map((news, index) => (
          <div >
            {news.id}
            {news.title}
          </div>
      ))}
    </div>
  );
};

export default test;
