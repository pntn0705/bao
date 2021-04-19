import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function TuyenDung() {
  const [tuyendungData, setTuyenDungData] = useState(null);

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
      .then((data) => setTuyenDungData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-blue-600">Công Ty Viễn Thông MobiFone</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Chào mừng bạn đến với công ty Viễn Thông MobiFone chi nhánh An Giang
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {tuyendungData &&
            tuyendungData.map((tuyendung, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={tuyendung.link}
                    alt={tuyendung.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tuyendung.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Ngày đăng</strong>:{" "}
                    {new Date(tuyendung.date).toLocaleDateString()}
                  </span>
                  
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {tuyendung.description}
                  </p>
                  <a
                    href={tuyendung.link}
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
