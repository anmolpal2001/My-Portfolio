"use client";

import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import authapp from "@/projects/authapp.png";
import dashnotes from "@/projects/dashnotes.png";
import knowledgehub from "@/projects/knowledgehub.png";
import startxup from "@/projects/startxup.png";
import tictactoe from "@/projects/tictactoe.png";
import reactmeals from "@/projects/reactmeals.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline underline-offset-2 md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <Layout classname="pt-16">
        <AnimatedText text="Imagination Trumps Knowledge" classname="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            <FeaturedProject
              title="Knowledge Hub"
              summary="A platform where user can book a tutor for any subject which have expertise in and tutor can accept or reject the request based on their availability."
              img={knowledgehub}
              link="https://yourknowledgehub.netlify.app/"
              github="https://github.com/anmolpal2001/KnowledgeHub_Frontend"
              type="MERN Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="DashNotes"
              img={dashnotes}
              link="https://dashnote.netlify.app"
              github="https://github.com/anmolpal2001/Notes-app"
              type="ReactJs Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Auth App"
              img={authapp}
              link="https://my-authapp.netlify.app/"
              github="https://github.com/anmolpal2001/Auth_App"
              type="MERN Project"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="React Meals"
              summary="This is a react project where user can order meals and see the total amount of order."
              img={reactmeals}
              link="https://enjoy-your-meals.netlify.app/"
              github="https://github.com/anmolpal2001/Food-Order-App"
              type="ReactJs Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="StartXup"
              img={startxup}
              link="https://startxup.netlify.app"
              github="https://github.com/anmolpal2001/StartXup_Website"
              type="MERN Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="TicTacToe"
              img={tictactoe}
              link="https://zero-katas.netlify.app/"
              github="https://github.com/anmolpal2001"
              type="ReactJs Project"
            />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Projects;
