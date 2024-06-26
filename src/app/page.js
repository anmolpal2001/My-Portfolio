import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "@/images/Me.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light xl:items-start">
      <Layout classname="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-start justify-between w-full lg:flex-col gap-8">
          <div className="w-1/2 lg:w-full lg:inline-block lg:mb-8 lg:px-0">
            <Image src={profilePic} alt="AnmolPal" className="w-full rounded-3xl h-auto" 
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText text="Transforming ideas into tangible reality through code and design." classname="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a proficient full-stack developer, I'm committed to transforming concepts into cutting-edge web applications. Explore my recent projects that showcase my expertise in the MERN (MongoDB, Express.js, React.js, Node.js) fullstack development
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href="/resume.pdf" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base" target="_blank">
                <span>Resume</span>
                <LinkArrow className={"w-6 ml-1"}/>
              </Link>
              <Link href="mailto:anmolpal2001@gmail.com" className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe/>
      <div className="absolute right-8 bottom-4 inline-block w-24 lg:hidden">
        <Image src={lightBulb} alt="PreciousCoder" className="w-full h-auto"/>
      </div>
    </main>
  );
}
