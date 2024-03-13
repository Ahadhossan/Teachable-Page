import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <header className="flex items-center justify-between p-6 border-b border-black">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="https://www.datocms-assets.com/67254/1659386300-teachable_logo-header.svg"
              width={100}
              height={50}
              alt="Teachable Online Course Platform: Create & Sell Courses"
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Examples</li>
              <li>Resources</li>
            </ul>
          </nav>
        </div>

        {isOpen && (
          <nav className="absolute bg-white top-0 bottom-0 left-0 right-0 z-50 mt-20 p-8 lg:hidden">
            <ul className="text-2xl flex flex-col gap-8">
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Examples</li>
              <li>Resources</li>
            </ul>
          </nav>
        )}

        <div className="hidden lg:flex lg:gap-8">
          <button>Log In</button>
          <button>Join for free</button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
