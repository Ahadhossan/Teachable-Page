import React from "react";
import Image from "next/image";
import establish from "@/images/establish.avif";

export default function Establish() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#CDE3D8",
        }}
        className="py-20 lg:py-24 px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <article className="dark-green">
            <h2 className="text-4xl lg:text-5xl mb-10">
              Establish your business&apos;s hub on Teachable
            </h2>
            <p className="mb-10">
              In this free mini course, learn how to showcase your business and
              start collecting leads on Teachable in just five days.
            </p>
            <button
              style={{
                color: "#1B4843",
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "#1B4843",
              }}
            >
              Register for free
            </button>
          </article>

          <article>
            <Image src={establish} width="auto" height="auto" alt="Establish" />
          </article>
        </div>
      </section>
    </>
  );
}
