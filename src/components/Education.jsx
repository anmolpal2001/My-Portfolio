import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, className="" }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className={`my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] ${className}`}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <p className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </p>
        <p className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {place}
        </p>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Technology in Computer Science and Engineering"
            time="2020 - 2024"
            place="Inderprastha Engineering College, Ghaziabad, Uttar Pradesh (IPEC)"
            // info="Relevant courses included Data Structures and Algorithms, Computer Network, Operating System, and Database Management System, etc."
            info="Secured 78.96% till 6th Sem"
          />
          <Details
            type="Intermediate"
            time="2020"
            place="Children's Academy Sr. Sec. School, Vijay Nagar Ghaziabad, Uttar Pradesh"
            info="Secured 85.6% in the CBSE Board Examination."
          />
          <Details
            type="High School"
            time="2018"
            place="Children's Academy Sr. Sec. School, Vijay Nagar Ghaziabad, Uttar Pradesh"
            info="Secured 77.8% in the CBSE Board Examination."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
