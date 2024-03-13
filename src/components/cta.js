import React from "react";

export default function Cta() {
  return (
    <>
      <section className="background-green py-20 lg:py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl mb-10">
            Share what you know.™ <br />
            Sign up free today.
          </h2>
          <button className="bg-black text-white py-3 px-6 rounded hover:opacity-75 transition-all duration-150">
            Join for free
          </button>
        </div>
      </section>
    </>
  );
}
