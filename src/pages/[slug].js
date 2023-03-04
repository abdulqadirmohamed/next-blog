import PostDetails from "@/components/PostDetails";
import TopStories from "@/components/TopStories";
import React from "react";

const Post = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="col-span-2">
          <PostDetails/>
        </div>
        <div className="col-span-1 ">
        <h1>Top Stories</h1>
          <TopStories/>
        </div>
      </div>
    </div>
  );
};

export default Post;
