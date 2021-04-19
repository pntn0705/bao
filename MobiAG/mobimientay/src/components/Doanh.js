import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Doanh() {
  const [doanhData, setDoanh] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "doanh"]{
                title,
                slug,
                doanhType,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setDoanh(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-blue-600">
          Tin tức nổi bật
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Tổng hợp Tin Tức, Giải Pháp, và Thông Tin Công Ty
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doanhData &&
            doanhData.map((doanh, index) => (
              <article>
                <Link to={"/doanh/" + doanh.slug.current} key={doanh.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <span>
                    <img
                      src={doanh.mainImage.asset.url}
                      alt={doanh.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-gray-100 text-gray-100 bg-opacity-75 rounded">
                        {doanh.title}
                      </h3>
                    </span>

                    </span>
                    
                   
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
