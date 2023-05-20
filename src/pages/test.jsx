import { useState } from "react";
import { useRouter } from "next/router";

const images = [
  "https://images.pexels.com/photos/1179234/pexels-photo-1179234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/371570/pexels-photo-371570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1027393/pexels-photo-1027393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

// const slider = [
//   {
//     id:1,
//     cover: "https://images.pexels.com/photos/1179234/pexels-photo-1179234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: 'Wi-Fi like speeds, now on the go.',
//     description: 'With Airtel 5G Plus. Up to 30x faster',
//     link: 'Order Now'
//   },
//   {
//     id:2,
//     cover : "https://images.pexels.com/photos/371570/pexels-photo-371570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: 'Family of 2. Or Family of 4.',
//     description: 'Get Airtel Postpaid Family Plan for your special family',
//     link: 'Order Now'
//   }
// ]
export default function test() {
  const [currentIndex, setCurrentIndex] = useState(0);



  const previousImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  const router = useRouter();

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt="carousel image"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute left-2 bottom-6">
        <div className="flex gap-6 items-center">
          <button
            onClick={previousImage}
            className="bg-black rounded-full text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="text-white">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={nextImage}
            className="bg-black rounded-full text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
