import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, Certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-fit rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 hover:scale-105 transition-transform">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-r from-black to-gray-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaCertificate className="text-blue-600 w-6 h-6" />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Cert = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Certification</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Certifications are crucial for validating your skills and expertise,
          providing a structured way to showcase your knowledge to potential
          employers, clients, and peers. They enhance your credibility by
          demonstrating that you have met established industry standards, making
          you a more attractive candidate in a competitive job market.
          Additionally, earning a certification reflects your commitment to
          professional development and lifelong learning, signaling to employers
          that you are dedicated to staying updated with industry trends and
          practices. Certified professionals often command higher salaries and
          gain access to job opportunities that require specific qualifications,
          all while boosting their confidence in their abilities. Ultimately,
          certifications not only set you apart but also empower you to
          contribute more effectively to any organization.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {Certifications.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Cert, "");
