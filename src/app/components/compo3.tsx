import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/pics/vertopal.com_f932382f-3379-4abe-b001-3dfa297b858a.jpeg";
import shop from "../../../public/pics/shop.jpg"

const Compo3 = () => {
  return (
    <div className=" border border-gray-600 duration-700 m-10 p-3 rounded-lg hover:my-5 hover:mx-0">
      <h1 className="text-3xl font-extrabold  hover:text-4xl hover:animate-pulse  text-center font-sans">
        PROJECTS
      </h1>
      <div className="mt-20 mx-2 outline rounded-3xl">
        <Link href={"https://my-app-azazon-like-website-str-lhcw.vercel.app/"}>
          <Image
            src={project1}
            alt="project 1"
            height={200}
            width={500}
            className="rounded-3xl "
          />
        </Link>
      </div>
      <div><Link href={"https://shopify-frontpage.vercel.app/"}>
          <Image
            src={shop}
            alt="project 1"
            height={200}
            width={500}
            className="rounded-3xl mt-32"
          />
        </Link></div>
    </div>
  );
};
export default Compo3;
