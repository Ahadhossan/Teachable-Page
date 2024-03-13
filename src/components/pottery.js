import React from "react";
import pottery from "@/images/pottery.avif";
import Image from "next/image";

export default function Pottery() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#1B4843",
        }}
        className="px-6 pt-32 pb-16 lg:pt-40"
      >
        <div className="max-w-6xl mx-auto">
          <article>
            <h2
              style={{
                color: "#CDE3D8",
                lineHeight: 1.4,
              }}
              className="text-4xl lg:text-5xl 2xl:text-6xl mb-10 lg:mb-20"
            >
              From online courses to digital downloads and beyond, this is where
              creative entrepreneurs build the future. Watch the video below to
              see how Teachable can transform your business.
            </h2>

            <Image
              src={pottery}
              width={768}
              height={768}
              alt="Teachable Online Courses Promo Video"
            />
          </article>
        </div>
      </section>
    </>
  );
}
