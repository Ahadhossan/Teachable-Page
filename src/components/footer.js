import Image from "next/image";
import React from "react";
import logo from "@/images/logo.svg";
import facebook from "@/images/facebook.svg";
import youtube from "@/images/youtube.svg";
import pinterest from "@/images/pinterest.svg";
import instagram from "@/images/instagram.svg";
import twitter from "@/images/twitter.svg";
import linkedin from "@/images/linkedin.svg";
import tiktok from "@/images/tiktok.svg";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#232223",
        }}
      >
        <div className="max-w-6xl mx-auto py-20 lg:py-24 px-8 text-white lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src={logo}
              width={250}
              height={100}
              alt="Teachable"
              className="mb-10"
            />
            <p>
              Join the more than 100,000 creators who use Teachable to share
              their knowledge. Easily create an online course or coaching
              business with our powerful yet simple all-in-one platform.
            </p>
          </div>

          <div className="mt-20 lg:mt-0 grid grid-cols-2 gap-10 lg:grid-cols-3">
            <article>
              <p className="mb-6 text-lg font-bold">Explore</p>
              <ul className="flex flex-col gap-3">
                <li>Features</li>
                <li>Pricing</li>
                <li>Examples</li>
                <li>Newsletter</li>
                <li>Community</li>
                <li>Podcast</li>
              </ul>
            </article>

            <article>
              <p className="mb-6 text-lg font-bold">Company</p>
              <ul className="flex flex-col gap-3">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Partners</li>
              </ul>
            </article>

            <article>
              <p className="mb-6 text-lg font-bold">Support</p>
              <ul className="flex flex-col gap-3">
                <li>Knowledge Base</li>
                <li>Contact Support</li>
                <li>Contact Sales</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Content Guidelines</li>
                <li>House Rules</li>
                <li>Cookie Policy</li>
                <li>Ethics Line</li>
                <li>Accessibility</li>
              </ul>
            </article>
          </div>
        </div>
      </footer>

      <div
        style={{
          backgroundColor: "#232223",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center justify-center gap-8 lg:flex-row-reverse lg:justify-between">
          <ul className="flex items-center justify-center flex-wrap gap-4">
            <li>
              <Image src={youtube} width={35} height={35} alt="YouTube" />
            </li>
            <li>
              <Image src={facebook} width={35} height={35} alt="Facebook" />
            </li>
            <li>
              <Image src={pinterest} width={35} height={35} alt="Pinterest" />
            </li>
            <li>
              <Image src={instagram} width={35} height={35} alt="Instagram" />
            </li>
            <li>
              <Image src={twitter} width={35} height={35} alt="Twitter" />
            </li>
            <li>
              <Image src={linkedin} width={35} height={35} alt="LinkedIn" />
            </li>
            <li>
              <Image src={tiktok} width={35} height={35} alt="TikTok" />
            </li>
          </ul>

          <p className="text-white text-sm">
            Copyright © 2024 Teachable, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
