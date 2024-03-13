import React from "react";
import Image from "next/image";
import hero from "@/images/hero.avif";

export default function Hero() {
  return (
    <>
      <section className="pt-10 px-6 grid grid-cols-1 gap-10 lg:gap-24 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center max-w-6xl mx-auto">
        <article className="lg:flex-1">
          <h1 className="text-4xl mb-10 lg:text-5xl 2xl:text-6xl">
            Share what you know.<sup>TM</sup>
          </h1>
          <p className="text-sm lg:text-base mb-20">
            Transform your knowledge into a thriving business with the best
            online course platform for creators everywhere.
          </p>

          <form>
            <article className="lg:flex lg:gap-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here"
                required
                autoComplete="off"
                className="w-full border-b border-black py-2 px-4 placeholder-black block mb-10 outline-none lg:flex-1"
              />

              <button
                type="submit"
                className="background-green py-2 px-4 w-full rounded mb-5 lg:w-auto"
              >
                Join for free
              </button>
            </article>

            <small className="text-xs block">
              *By submitting your email address, you agree to Teachable&&apos;s
              Terms of use and Privacy Policy.
            </small>
          </form>
        </article>

        <article className="lg:flex-1 -mb-5 lg:-mb-20">
          <Image
            src={hero}
            width={500}
            height={500}
            alt="Share what you know"
          />
        </article>
      </section>
    </>
  );
}
