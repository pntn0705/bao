import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image1 from "../z2433483558768_801d08962c667d24b8ac8fc21263543b.jpg";
import image2 from "../Top Banner-01.png";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const slideImages = [
    image1,
    image2,
  ];

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gioithieu"]{
          title,
          date,
          place,
          description,
          gioithieuType,
          link,
          tags
      }`
      )
      .then((data) => setHomeData(data))
      .catch(console.error);
  }, []);

  return (
     
      <main className="bg-green-100 min-h-screen p-12">
        <div>
        
          <div className="slide-container">
        <Slide>
          <div className="each-slide">
          <img
              src={image1}
              alt="Monstera Leaves"
            />
          </div>
          <div className="each-slide">
            <img
              src={image2}
              alt="Monstera Leaves"
            />
          </div>
        </Slide>
      </div>
      </div>
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-blue-600">Công Ty Viễn Thông MobiFone</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Chào mừng bạn đến với công ty Viễn Thông MobiFone chi nhánh An Giang
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {homeData &&
            homeData.map((home, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={home.link}
                    alt={home.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {home.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Ngày đăng</strong>:{" "}
                    {new Date(home.date).toLocaleDateString()}
                  </span>
                  
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {home.description}
                  </p>
                  <a
                    href={home.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    Xem thêm{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  
  );
}
