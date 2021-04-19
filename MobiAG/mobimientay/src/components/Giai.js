import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Giai() {
  const [giaiData, setGiai] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "giai"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setGiai(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-blue-600">
          Giải Pháp cho DoanhNghiep
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Các giải pháp tốt cho công ty đối tác
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giaiData &&
            giaiData.map((giai, index) => (
              <article>
                <Link to={"/giai/" + giai.slug.current} key={giai.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <span>
                    <img
                      src={giai.mainImage.asset.url}
                      alt={giai.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-gray-100 text-gray-100 bg-opacity-75 rounded">
                        {giai.title}
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
