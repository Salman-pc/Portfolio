import React from 'react';
import profile from '../assets/profile3.jpg'
import resume from '../assets/resume.pdf'
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Sun, Moon } from "lucide-react";
import { useTheme } from '../context/ThemeContext';


function Home() {

  const { theme, toggleTheme } = useTheme();
  const textArray = ["Frontend Developer", "Full Stack Developer", "MERN Stack Developer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      if (isRemoving) {
        // Remove letters one by one
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsRemoving(false);
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to the next text
        }
      } else {
        // Add letters one by one
        setCurrentText((prev) =>
          textArray[index].slice(0, prev.length + 1)
        );
        if (currentText === textArray[index]) {
          setTimeout(() => setIsRemoving(true), 2000); // Pause before removing
        }
      }
    };
    const interval = setInterval(handleAnimation, 100); // Speed of adding/removing letters
    return () => clearInterval(interval);
  }, [currentText, isRemoving, index, textArray]);

  return (
    <div className=' relative container mx-auto max-w-screen-xl mt-4 sm:border-[3px] sm:border-gray-600 rounded-lg  sm:px-3 sm:py-8 mb-3'>
      <div className=" text-white h-full w-full ">
        <button 
          onClick={toggleTheme}
          className="absolute md:right-2 md:top-2 right-0 -top-6 border-3 border-gray-600 p-2 rounded-lg transition duration-300 bg-gray-200 dark:bg-gray-700"
        >
          {theme === "light" ? <Moon className="text-gray-800" /> : <Sun className="text-yellow-500" />}
        </button>

        <div className=" w-full sm:px-4 flex flex-col md:flex-row  md:justify-between  items-center justify-between">
          {/* Left Section */}
          <div className="  lg:w-9/12 md:w-full md:text-left">
            <div className="md:text-xl sm:text-md text-gray-400">

              <div className="sm:text-2xl text-[23px]  font-semibold mt-4">
                I'm a{" "}
                <span className="text-orange-400">
                  {currentText}
                  <span className="blinking-cursor">|</span>
                </span>
              </div>
            </div>

            <h1 className="md:text-5xl text-4xl font-bold mt-4">
              Hi I'M <span className="text-orange-400 md:text-5xl text-3xl">MOHAMMAD SALMAN</span>
            </h1>
            <div className=" text-gray-400 my-6 ">
              <p className="scrolling-text lg:mr-16">
                I am a passionate and dedicated MERN stack developer with expertise in building responsive, scalable, and user-friendly web applications. I specialize in utilizing MongoDB, Express.js, React, and Node.js to deliver innovative solutions tailored to meet specific client and user needs. My goal is to continuously learn, adapt, and leverage my skills to contribute effectively to the ever-evolving world of technology
              </p>
            </div>
            <div className="mt-6 flex items-center flex-row justify-start space-x-3">
              <div>
                <motion.a
                  whileTap={{ scale: .8 }}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeOut', delay: .1 }}
                  download="Resume.pdf"
                  href={resume}
                  className="bg-transparent border-2 max-w-fit hover:border-orange-500 border-gray-600 text-orange-400 hover:bg-orange-500 hover:text-black md:px-6 px-3 py-2 rounded-lg flex items-center space-x-2 transition"
                >
                  <span className='lg:text-md text-sm'>Download CV</span>
                  <i className="fas fa-download"></i>
                </motion.a>
              </div>

              <div className='flex gap-4  sm:mt-0'>
                <a
                  href="https://github.com/Salman-pc?tab=repositories"
                  target='_blank'
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://x.com/m_salman_pc"
                  target='_blank'
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/m_salman_pc/?hl=en"
                  target='_blank'
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammad-salman-pc/"
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="LinkedIn"
                  target='_blank'
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" hidden md:block w-fit ">
            <div className="  h-[220px] w-[220px]  ">
              <img
                src={profile}
                alt="salman"
                className="w-full h-full object-cover rounded-full h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
