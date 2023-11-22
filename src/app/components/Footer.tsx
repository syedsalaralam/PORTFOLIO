import Image from "next/image";
import React from "react";
import Link from "next/link";
import Typescript from "./../../../public/pics/download.png";
import react from "./../../../public/pics/download (2).png";
import next from "./../../../public/pics/maxresdefault.jpg";
import Tailwind from "./../../../public/pics/tailwind-css-logo-vector.png";
import Lucide from "./../../../public/pics/download (1).png";

const Footer = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center">
        Get knowledge about the softwares
      </h1>
      <div className="lg:flex justify-evenly items-center lg:m-28 mt-20 mx-40 ">
        <Link href={"https://react.dev/"}>
          <Image src={react} alt="" width={100} height={200} className="border-2 border-sky-500 rounded-lg m-2 "/>
        </Link>
        <Link href={"https://nextjs.org/"}>
          <Image src={next} alt="" width={100} className="border-2 border-white rounded-lg m-2"/>
        </Link>
        <Link href={"https://tailwindcss.com/"}>
          <Image src={Tailwind} alt="" width={100} className="border-2 border-sky-500 rounded-lg m-2"/>
        </Link>
        <Link
          href={
            "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
          }
        >
          <Image src={Typescript} alt="" width={100} className="border-2 border-white rounded-lg m-2"/>
        </Link>
        <Link href={"https://lucide.dev/"}>
          <Image src={Lucide} alt="" width={100} className="border-2 border-orange-500 rounded-lg m-2"/>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
