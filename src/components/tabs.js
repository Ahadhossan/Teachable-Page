import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    image: "/images/tab-1.avif",
    quote:
      "“What really has clinched it for me, why I chose Teachable, and why I love it and will continue to do my online courses with Teachable, is the great support that they have.”",
    title: "Julia Stoian : Live. Write. Thrive",
  },
  {
    image: "/images/tab-2.avif",
    quote:
      "“Ninety-five percent of my income comes from online courses. They are literally the perfect product. They’re scalable, fun to make, and you help a lot of people. I don’t normally get obsessed with tech. But I am obsessed with Teachable.”",
    title: "Mariah Coz : Marketing for Course Creators",
  },
  {
    image: "/images/tab-3.avif",
    quote:
      "“An online course model has given us a unique kind of flexibility...the marginal cost per student is quite small, allowing us to scale a lot quicker than if we were doing, say, in-person training, or some other kind of high-touch industry service.”",
    title: "Alan Perlman : Drone Pilot Ground School",
  },
];

export default function Tabs() {
  const [tabs] = useState(data);
  const [value, setValue] = useState(0);

  const { image, quote, title } = tabs[value];

  return (
    <>
      <section className="dark-bg-green py-24 lg:py-32 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <article>
            <ul className="mb-10 flex items-center justify-center gap-8 lg:hidden">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setValue(index)}
                  className={`tabs ${value === index && "active"}`}
                ></li>
              ))}
            </ul>

            <article className="flex items-center justify-center mb-10">
              <p className="border-t-4 pt-2">In my own words</p>
            </article>

            <h3
              style={{
                lineHeight: 1.4,
              }}
              className="text-4xl text-center mb-8"
            >
              {quote}
            </h3>

            <p className="text-center">{title}</p>
          </article>

          <article className="lg:flex lg:items-center lg:gap-16">
            <Image
              src={image}
              height={700}
              width={700}
              alt={title}
              className="w-full"
            />

            <ul className="hidden lg:flex lg:flex-col lg:gap-8">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setValue(index)}
                  className={`tabs ${value === index && "active"}`}
                ></li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
