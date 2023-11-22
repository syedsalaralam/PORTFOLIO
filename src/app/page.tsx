import Image from "next/image";
import Compo from "./components/Compo";
import Compo2 from "./components/compo2";
import Compo3 from "./components/compo3";
import Footer from "./components/Footer";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-4xl text-center font-extrabold border border-gray-600 flex justify-center items-center">
        <h1 className="p-3  w-max rounded-lg duration-300 lg:duration-700 pt-10 hover:p-16 hover:text-6xl hover:animate-pulse font-sans">
          SYED SALAR ALAM
        </h1>
      </div>
      <div className="lg:grid grid-cols-3 min-h-screen align-middle">
        <Compo2 />
        <Compo />
        <Compo3 />
      </div>
      <div className="border-t-2 border-gray-600 m-28 "></div>
      <Footer />
      <div className="border-t-2 border-gray-600 m-28 "></div>
      <div>
        <h1 className="text-5xl font-sans font-extrabold text-center mt-20 ">
          Find me on
        </h1>
        <div className="flex flex-wrap justify-evenly m-20 ">
          <Link href={"https://www.facebook.com/profile.php?id=100091984908441"}>
            <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-lg bg-gray-600 text-white hover:bg-blue-500 ">
              <Facebook />
            </div>
          </Link>
          <Link href={"https://www.instagram.com/syedsalaralam/"}>
            <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-lg bg-gray-600 text-white hover:bg-pink-600 transition-colors ">
              <Instagram />
            </div>
          </Link>
          <Link href={"https://twitter.com/SyedSalarAlam2"}>
            <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-lg bg-gray-600 text-white hover:bg-blue-500 ">
              <Twitter />
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/feed/"}>
            <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-lg bg-gray-600 text-white hover:bg-black ">
              <Linkedin />
            </div>
          </Link>
          <div>
            <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-lg bg-gray-600 text-white hover:bg-red-600 ">
              <Mail />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-600 m-28 "></div>
      </div>
      <div className="font-sans text-center lg:flex justify-center mb-20 gap-x-32 text-gray-600">
        <h1>Email:syedsalaralam786@gmail.com</h1>
        <h1> Email:syedsalaralam123@gmail.com</h1>
      </div>
    </div>
  );
}
