import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import aman from "../assets/aman.png";

const Hero = () => {
  return (
    <section
      className="padding relative w-full h-[120vh] 
    mx-20"
    >
      <div
        className={`${styles.paddingX} absolute ml-10 
          insert-0 top-[120px] max-w-7xl mx-auto flex
          flex-row items-start gap-5`}
      >
        <div
          className="flex flex-col 
        justify-center items-center mt-5"
        >
          <div className="w-3 h-3 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[10px] text-white`}>
            Hi, I'm
            <span className="text-[#915eff]"> Amanuel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer | Full Stack Developer
            <br className="sm:block hidden" />| UI/UX Designer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
