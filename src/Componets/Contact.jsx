import React from 'react'
import { motion } from 'framer-motion'


function Contact() {

    return (
        <div className="mb-5 flex flex-col items-center justify-center">
            <div className="container max-w-screen-xlsm:border-gray-600 rounded-lg sm:px-6 sm:py-8 flex flex-col items-center justify-center mx-auto">
                <h1 className="md:text-3xl text-2xl font-bold text-left w-full sm:md:my-5 my-3 mb-6">Get in Touch</h1>

                <div className="flex flex-col md:flex-row justify-between  items-center sm:space-y-8 space-y-4 md:space-y-0 md:space-x-6 w-full h-full min-h-[400px]">
                    {/* Section One */}
                    <div className=" p-3 rounded-lg shadow-lg flex-1 flex items-center justify-center w-full h-[455px]">
                        <div className="w-full h-full flex flex-col justify-cente items-centerr">

                            <motion.div
                                initial={{ y: -25, opacity: 0.2 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: "1", delay: "1" }}
                                href="mailto:salmanpc124@gmail.com" className="flex shadow-xl h-1/4 items-center border-[.5px] border-gray-400 w-full rounded-lg p-5 ">
                                <span className="text-lg font-medium">
                                    <a
                                        href="mailto:salmanpc124@gmail.com"
                                        className="text-orange-400 hover:text-orange-500"
                                        title="Email"
                                    >
                                        <i className="fas fa-envelope fa-2xl"></i>
                                    </a>
                                </span>
                                <a
                                    href="mailto:salmanpc124@gmail.com"
                                    className="ml-3 text-orange-400 hover:underline"
                                >
                                    salmanpc124@gmail.com
                                </a>
                            </motion.div>

                            <div className="flex space-x-3 my-4 h-2/4 items-center justify-center">
                                <motion.a
                                    initial={{ x: -25, opacity: 0.2 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: "1", delay: "1" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/mohammad-salman-pc/"
                                    className="w-1/3 shadow-xl rounded-md h-full sm:min-h-[150px] min-h-[70px] border-[.5px] border-gray-400 flex justify-center items-center"
                                    title="LinkedIn"
                                >
                                    <div className="text-orange-400 hover:text-orange-500">
                                        <i className="fab fa-linkedin md:text-[50px] text-[35px]"></i>
                                    </div>
                                </motion.a>
                                <motion.a
                                    initial={{ y: 0, opacity: 0.2 }} animate={{ y: 0, opacity: 1, rotate: 360 }} transition={{ duration: "1", delay: "1" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/Salman-pc?tab=repositories"
                                    className="w-1/3 shadow-xl rounded-md h-full sm:min-h-[150px] min-h-[70px] border-[.5px] border-gray-400 flex justify-center items-center"
                                    title="GitHub"
                                >
                                    <div className="text-orange-400 hover:text-orange-500">
                                        <i className="fab fa-github md:text-[50px] text-[35px]"></i>
                                    </div>
                                </motion.a>
                                <motion.a

                                    initial={{ x: 25, opacity: 0.2 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: "1", delay: "1", }}
                                    title="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/m_salman_pc/?hl=en"
                                    className="w-1/3 shadow-xl rounded-md border-[.5px] border-gray-400 sm:min-h-[150px] min-h-[70px] h-full flex justify-center items-center"
                                >
                                    <div className="text-orange-400 hover:text-orange-500">
                                        <i className="fab fa-instagram md:text-[50px] text-[35px]"></i>
                                    </div>
                                </motion.a>
                            </div>

                            <motion.div
                                initial={{ y: 25, opacity: 0.2 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: "1", delay: "1" }}
                                className="flex items-center shadow-xl border-[.5px] border-gray-400 hover:outline-[1px] cursor-pointer w-full rounded-lg h-1/4 p-5 ">
                                <ul className="space-y-5">
                                    <li className="flex items-center space-x-4 ">
                                        <i className="fas fa-map-marker-alt text-2xl hover:text-orange-500 text-orange-400"></i>
                                        <span className="text-gray-300">Kerala, India</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Section Two */}
                    <div className=" p-3 border border-gray-500 rounded-lg shadow-lg flex-1 flex flex-col justify-between w-full h-full">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">Send me a message</h2>
                        <form action="#" method="POST" className="space-y-4 flex-grow">
                            <div>
                                <label
                                    htmlFor="full-name"
                                    className="block text-sm font-medium text-gray-400"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="full-name"
                                    name="full-name"
                                    className="mt-1 border border-gray-400 block w-full px-3 py-2   rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-400"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-3 py-2  border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2  border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
                            >
                                Send ➤
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Contact
