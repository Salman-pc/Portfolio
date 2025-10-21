import React from 'react';
import CardSwap, { Card } from '../lib/CardSwap'
import luminarlogo from '../assets/exp/luminar.png'
import seclobgreenlogo from '../assets/exp/seclobgreenlogo.png'
import { useExpContext } from '../context/ExpirenceContext';
import { motion } from 'framer-motion';

const Expirince = () => {

    const exp = [
        {
            name: "Luminar Technolab, Calicut",
            role: "Full Stack MERN Development (Internship Training)",
            imag: luminarlogo,
            desc: "Completed professional training in Full Stack MERN Development, gaining strong knowledge in MongoDB, Express.js, React, and Node.js. Focused on building and understanding full-stack workflows, API creation, and frontend-backend integration through guided assignments and hands-on exercises.",
            dura: "Sep 2024 – Apr 2025",
            loca: "Calicut, Kerala",
            exp: "6 months"
        },
        {
            name: "Seclob Technologies, Calicut,\n Cyberpark",
            role: "Frontend Developer",
            imag: seclobgreenlogo,
            desc: "Working as a Frontend Developer focused on building interactive, responsive web applications using React and Tailwind CSS. Responsible for creating reusable components, optimizing UI performance, and collaborating with the backend team for seamless API integration.",
            dura: "May 2025 – Present",
            loca: "Calicut, Kerala",
            exp: "5 months"
        }
    ]
    const { expCardidx } = useExpContext()


    return (
        <div>
            <div className="container max-w-screen-xl sm:h-[100%] f
             sm:border-gray-600 rounded-lg mx-auto sm:px-6 sm:pb-16 pb-16 sm:pt-6 mb-3">
                <h1 className="md:text-3xl text-2xl w-full font-bold text-left mb-8">Expirience</h1>
                <div className='flex w-full gap-3 flex-col lg:flex-row'>
                    <div className='w-full'>
                        {expCardidx == 0 &&
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className='space-y-2'>
                                <h2 className='font-semibold md:text-2xl text-xl text-white whitespace-nowrap'>{exp[0].name}</h2>
                                <div>
                                    <p className='text-white'>
                                        {exp[0].desc}
                                    </p>
                                </div>
                            </motion.div>}
                        {expCardidx == 1 &&
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className='space-y-2'>
                                <h2 className='font-semibold text-white md:text-2xl text-xl text-wrap'>{exp[1].name}</h2>
                                <div>
                                    <p className='text-white'>
                                        {exp[1].desc}
                                    </p>
                                </div>
                            </motion.div>
                        }
                    </div>

                    <div className='w-full relative '>
                        <CardSwap
                            cardDistance={50}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={true}
                        >
                            {exp.map((exp, idx) => <Card >
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <div className="flex gap-3 items-center mb-2">
                                        <img className="w-10 h-10 object-contain" src={exp?.imag} alt="Luminar Technolab Logo" />
                                        <div>
                                            <h3 className="text-xl  font-semibold text-white">
                                                {exp?.name}
                                            </h3>
                                            <p className="text-md text-gray-300">
                                                {exp?.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-sm text-white leading-relaxed">
                                        <p className='text-md'>
                                            {exp?.desc}
                                        </p>

                                        <div className="mt-1 grid gap-1">
                                            <div className="grid grid-cols-[auto_1fr]">
                                                <strong className="w-28 text-gray-400">Duration</strong>
                                                <span>{exp?.dura}</span>
                                            </div>
                                            <div className="grid grid-cols-[auto_1fr]">
                                                <strong className="w-28 text-gray-400">Experience</strong>
                                                <span>{exp.exp}</span>
                                            </div>
                                            <div className="grid grid-cols-[auto_1fr]">
                                                <strong className="w-28 text-gray-400">Location</strong>
                                                <span>{exp.loca}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>)}
                        </CardSwap>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expirince;
