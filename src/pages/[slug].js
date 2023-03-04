import PostDetails from "@/components/PostDetails";
import TopStories from "@/components/TopStories";
import React from "react";

const Post = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="col-span-2">
          <PostDetails/>
        </div>
        <div className="md:col-span-1 md:border-l-[1px] pl-5 ">
        <h1 className="text-[20px] font-bold">Top Stories</h1>
          <TopStories/>
        </div>
      </div>
    </div>
  );
};

export default Post;
