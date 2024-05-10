import React from "react";
import { motion } from "framer-motion";
import html from "@/skills/html.png";
import css from "@/skills/css.png";
import js from "@/skills/js.png";
import ts from "@/skills/ts.png";
import react from "@/skills/reactJS.png";
import RTK from "@/skills/RTK.png";
import SQL from "@/skills/SQL.png";
import Nodejs from "@/skills/Nodejs.png";
import MySQL from "@/skills/MySQL.png";
import mongodb from "@/skills/mongodb.png";
import NextJS from "@/skills/NextJS.png";
import bootstrap from "@/skills/bootstrap.png";
import Express from "@/skills/Express.png";
import C from "@/skills/C.png";
import Cpp from "@/skills/CPP.png";
import Git from "@/skills/Git.png";
import Figma from "@/skills/Figma.png";
import Image from "next/image";

const FramerImage = motion(Image);

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark px-6 py-3 text-light cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const onHoverAnimation = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.5,
      transition: {
        // type: 'easeInOut',
        // ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.35,
      },
    },
  };
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt-32 mb-16">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:hidden lg:dark:hidden
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark p-8 text-light cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          My Skill Set
        </motion.div>

        <Skill name="HTML" x={"-20vw"} y={"0vw"} />
        <Skill name="CSS" x={"-10vw"} y={"10vw"} />
        <Skill name="Javascript" x={"10vw"} y={"10vw"} />
        <Skill name="Typescript" x={"20vw"} y={"15vw"} />
        <Skill name="ReactJS" x={"20vw"} y={"0vw"} />
        <Skill name="NodeJs" x={"10vw"} y={"-10vw"} />
        <Skill name="ExpressJs" x={"-10vw"} y={"-10vw"} />
        <Skill name="MongoDB" x={"25vw"} y={"-7vw"} />
        <Skill name="MySQL" x={"-23vw"} y={"-7vw"} />
        <Skill name="Git" x={"0vw"} y={"-16vw"} />
        <Skill name="GitHub" x={"11vw"} y={"-18vw"} />
        <Skill name="Tailwind CSS" x={"0vw"} y={"15vw"} />
        <Skill name="Figma" x={"-23vw"} y={"8vw"} />
        <Skill name="C++" x={"22vw"} y={"8vw"} />
        <Skill name="C Language" x={"-13vw"} y={"-18vw"} />
        <Skill name="UI/UX" x={"-32vw"} y={"2vw"} />
      </div>
      <div>
        {/* <motion.div className="flex justify-start  items-start text-white font-bold w-full   flex-col text-start md:ml-2  md:px-5 md:py-2 px-3 py-2  my-5  text-xl md:text-3xl border-l-2 rounded-sm border-gray-200"> */}
        <motion.div className="hidden lg:flex justify-center items-center gap-10 w-full mt-4 flex-wrap"
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
          <FramerImage
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 bg-white rounded-md p-1"
            src={html}
            alt="html"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 rounded-md"
            src={react}
            alt="react"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 rounded-md"
            src={RTK}
            alt="react"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:h-16 lg:w-16 rounded-md"
            src={SQL}
            alt="react"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16"
            src={Nodejs}
            alt="react"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:h-14 lg:w-20 rounded-md"
            src={MySQL}
            alt="react"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 rounded-md"
            src={mongodb}
            alt="react"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 rounded-md"
            src={ts}
            alt="ts"
          />
          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 "
            src={NextJS}
            alt="NextJS"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 rounded-md"
            src={js}
            alt="js"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 rounded-md"
            src={bootstrap}
            alt="js"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 rounded-xs"
            src={Express}
            alt="js"
          />

          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 bg-white rounded-full p-1"
            src={css}
            alt="js"
          />
          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16 bg-white"
            src={Git}
            alt="git"
          />
          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16"
            src={C}
            alt="c"
          />
          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16"
            src={Cpp}
            alt="Cpp"
          />
          <FramerImage
            whileHover="hover"
            animate="rest"
            whileTap="hover"
            initial="rest"
            variants={onHoverAnimation}
            className="w-8 lg:w-16"
            src={Figma}
            alt="figma"
          />
        </motion.div>
        {/* </motion.div> */}
      </div>
    </>
  );
};

export default Skills;
