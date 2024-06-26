"use client";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useEffect, useRef } from "react";
import MyProfile from "@/images/My.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import HireMe from "@/components/HireMe";

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref,{once:true})

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView,value,motionValue]);

    useEffect(() => {
        springValue.on("change",(latestValue) => {
            if(ref.current && latestValue.toFixed(0) <= value){
                ref.current.textContent = latestValue.toFixed(0)
            }
        })
        },[springValue,value]);

    return (
        <span ref={ref} className="inline-block text-7xl font-bold">{value}</span>
    )
    
}

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout classname="pt-16">
        <AnimatedText text="Passion Fuels Purpose! " classname="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
        <div className="grid w-full grid-cols-2 gap-16 sm:gap-8">
          <div className="col-span-1 flex flex-col items-start justify-start self-center lg:self-start lg:order-2 md:col-span-2">
            <h2
              className="mb-4
                 text-lg font-bold uppercase text-dark/75 dark:bg-light/75"
            >
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm Anmol Pal, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. I am always looking for new and innovative ways to bring innovative solutions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.{" "}
            </p>
            <p className="font-medium mb-4">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
            <p className="font-medium">
            I eagerly anticipate the chance to channel my skills and enthusiasm into your upcoming project. Let's collaborate and create something extraordinary together!
            </p>
          </div>
          <div className="col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark lg:order-1 md:col-span-2">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={MyProfile}
              alt="PreciousCoder"
              className="w-full h-full rounded-2xl"
              priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={50}/>+</span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={40} />+</span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={1}/>+</span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
            </div>
          </div> */}
        </div>
        <Skills/>
        <Experience/>
        <Education/>
      </Layout>
      <HireMe />
    </main>
  );
};

export default About;
