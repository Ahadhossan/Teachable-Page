import Image from "next/image";
import React from "react";
import join from "@/images/join.avif";

export default function Join() {
  return (
    <>
      <section className="px-6 py-10 lg:py-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center max-w-6xl mx-auto">
        <article>
          <Image src={join} width="auto" height="auto" alt="Join Teachable" />
        </article>

        <article>
          <h2
            style={{
              color: "#1B4843",
            }}
            className="text-4xl lg:text-5xl mb-10"
          >
            Join more than 100,000 creators who&apos;ve sold over $1 billion in
            courses and coaching.
          </h2>
          <button
            style={{
              color: "#1B4843",
              borderBottomWidth: 2,
              borderBottomStyle: "solid",
              borderBottomColor: "#1B4843",
            }}
          >
            View features
          </button>
        </article>
      </section>

      <section className="px-6 py-10 lg:py-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <article>
          <span
            style={{
              color: "#1B4843",
              borderBottomWidth: 2,
              borderBottomStyle: "solid",
              borderBottomColor: "#1B4843",
            }}
            className="text-4xl font-bold block mb-4 pb-4"
          >
            1
          </span>
          <h3
            style={{
              color: "#1B4843",
            }}
            className="text-3xl mb-4"
          >
            Easy as it gets.
          </h3>
          <p className="dark-green">
            In a matter of minutes, you&apos;ll have access to everything you
            could ever need to create and sell online courses and coaching—our
            stress-free platform makes it easy—tech skills or no tech skills.
          </p>
        </article>

        <article>
          <span
            style={{
              color: "#1B4843",
              borderBottomWidth: 2,
              borderBottomStyle: "solid",
              borderBottomColor: "#1B4843",
            }}
            className="text-4xl font-bold block mb-4 pb-4"
          >
            2
          </span>
          <h3
            style={{
              color: "#1B4843",
            }}
            className="text-3xl mb-4"
          >
            Teach the way you want to learn.
          </h3>
          <p className="dark-green">
            This is the fun part. Show off your brand&apos;s unique POV by using
            our customization tools to curate and personalize your content.
          </p>
        </article>

        <article>
          <span
            style={{
              color: "#1B4843",
              borderBottomWidth: 2,
              borderBottomStyle: "solid",
              borderBottomColor: "#1B4843",
            }}
            className="text-4xl font-bold block mb-4 pb-4"
          >
            3
          </span>
          <h3
            style={{
              color: "#1B4843",
            }}
            className="text-3xl mb-4"
          >
            The small matter of getting paid.
          </h3>
          <p className="dark-green">
            You didn&apos;t go into business to stress over money (quite the
            opposite) so we&apos;ve got that covered. Payouts, taxes,
            affiliates, authors, that&apos;s our thing—you do yours.
          </p>
        </article>
      </section>
    </>
  );
}
