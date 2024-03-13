import React from "react";
import Image from "next/image";
import award from "@/images/award.avif";

export default function Award() {
  return (
    <>
      <section className="dark-bg-green py-20 lg:py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <article>
            <Image src={award} width="auto" height="auto" alt="Establish" />
          </article>

          <article
            style={{
              color: "#CDE3D8",
            }}
          >
            <h2
              style={{
                lineHeight: 1.2,
              }}
              className="text-4xl lg:text-5xl mb-10"
            >
              Award-winning support for creators and businesses of all sizes and
              subjects.
            </h2>
            <button
              style={{
                color: "#CDE3D8",
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "#CDE3D8",
              }}
            >
              Contact Us
            </button>
          </article>
        </div>
      </section>
    </>
  );
}
