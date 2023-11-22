import Image from "next/image";
import React from "react";
import me from "../components/pics/348485016_219015677639938_3656891413611691551_n.jpg";


const Compo = () => {
  return (
    <div className=" border border-gray-600 duration-700 p-3 rounded-lg flex-wrap m-10 hover:my-5 hover:mx-0">
      <h1 className="text-3xl  font-extrabold text-center hover:text-4xl hover:animate-pulse  font-sans">
        ABOUT ME
      </h1>
      <div className="flex justify-center p-5 mt-14">
        <Image src={me} alt="me" width={300} className="rounded-3xl" />
      </div>
      <div className="font-sans text-center font-bold text-gray-600 flex-wrap pt-20">
        <p>Front End Developer</p>
        <div className="border-t-2 border-gray-600 m-7 "></div>
        <p>working on Full stack development</p>
        <div className="border-t-2 border-gray-600  m-7"></div>
        <p>
        Making people aware of React , Next.js and Tailwind CSS like cutting edge
          technologies
        </p>
        <div className="border-t-2 border-gray-600 m-7 "></div>
        <p className="pb-5">Financial accounting pofessional</p>
      </div>
    </div>
  );
};
export default Compo;
