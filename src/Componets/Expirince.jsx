import React from 'react';
import CardSwap, { Card } from '../lib/CardSwap'
import luminarlogo from '../assets/exp/luminar.png'
import seclobgreenlogo from '../assets/exp/seclobgreenlogo.png'


const Expirince = () => {

    const exp = [
        {
            name: 'Luminar Technolab, Calicut',
            role: 'Full Stack MERN Development',
            imag: luminarlogo,
            desc: 'Successfully completed hands-on training in MERN Stack Development, covering technologies like MongoDB, Express.js, React, and Node.js. Built real-world projects, learned API integration, and gained practical experience in both frontend and backend development.',
            dura: ' Sep 2024 – Apr 2025',
            loca: ' Calicut, Kerala',
            exp : '6 month'
        },
        {
            name: `Seclob Technologies, Calicut,\n Cyberpark`,
            role: 'Frontend Developer',
            imag: seclobgreenlogo,
            desc: 'Successfully completed hands-on training in MERN Stack Development, covering technologies like MongoDB, Express.js, React, and Node.js. Built real-world projects, learned API integration, and gained practical experience in both frontend and backend development.',
            dura: 'May 2025 – Continue',
            loca: 'Calicut, Kerala',
            exp : '5 month'
        }
    ]

    return (
        <div>
            <div className="container max-w-screen-xl sm:h-[100%] sm:border-[3px] sm:border-gray-600 rounded-lg mx-auto sm:px-6 sm:pb-16 pb-16 sm:pt-6 mb-3">
                <h1 className="md:text-3xl text-2xl w-full font-bold text-left mb-8">Expirience</h1>
                <div className='h-[400px] relative'
                >
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        {exp.map((exp, idx) => <Card >
                            <div
                                key={idx}
                                className="p-4   rounded-xl shadow-md hover:shadow-lg transition-all">
                                <div className="flex gap-3 items-center mb-2">
                                    <img className="w-10 h-10 object-contain" src={exp?.imag} alt="Luminar Technolab Logo" />
                                    <div>
                                        <h3 className="text-lg  font-semibold text-gray-800 dark:text-white">
                                            {exp?.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {exp?.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>
                                        {exp?.desc}
                                    </p>

                                    <p className="mt-1">
                                        <span className="block">
                                            <strong>Duration:</strong>{exp?.dura}
                                        </span>
                                        <span className="block">
                                            <strong>Expirience:</strong> {exp.exp}
                                        </span>
                                        <span className="block">
                                            <strong>Location:</strong> {exp.loca}
                                        </span>
                                    </p>
                                </div>
                            </div>


                        </Card>)}


                    </CardSwap>
                </div>

            </div>
        </div>
    );
}

export default Expirince;
