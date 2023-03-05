import React, { useEffect, useState } from "react";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.png";
import img5 from "../img/img5.jpg";
import img4 from "../img/img4.jpg";
import Link from "next/link";
import { AfricaCards } from "./AfricaCards";
import { db } from "../firebase";
import { async } from "@firebase/util";
import { getDoc, collection, getDocs, doc } from "firebase/firestore";

const Africa = () => {
  const [posts, setPosts] = useState([])

  const postsCollectionRef = collection(db, 'posts')

  useEffect(()=>{
    const getPosts = async () =>{
      const data = await getDocs(postsCollectionRef)
      // setPosts(data.docs.map((doc)=>{({ ...doc.data(), id: doc.id })}))
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));


      console.log(posts)
    }
getPosts()
  },[])
  
  return (
    <div className="my-10">
      <Link
        href="africa-news"
        className="pl-3 border-l-[3px] border-green-600 text-lg font-bold text-gray-700 mb-6"
      >
        Africa News
      </Link>
      <div className="grid md:grid-cols-4 gap-4 mt-3">
        {posts?.map((news) => {
            return (
              <div key={news.id}>
                <AfricaCards
                  cover={news.image}
                  title={news.title}
                  description={news.description}
                />
        
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Africa;
