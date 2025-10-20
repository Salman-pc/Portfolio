
import { motion } from 'framer-motion'
import { ProjectsExp } from '../lib/lib';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Moreproject = () => {

    const navigate = useNavigate()
    const {pathname}=useLocation()

    useEffect(() => {
     window.scrollTo(0,0)
    }, [pathname])
    

    return (
        <div className="container sm:px-3 max-w-screen-xl mx-auto overflow-hidden py-10 mb-5">

            <div className='flex sm:mb-8 mb-4 item-center  gap-3'>
                <ArrowLeft
                onClick={()=>navigate(-1)}
                 className='text-xl cursor-pointer mt-2 ' />
                <h1 className="md:text-3xl text-2xl w-full font-bold text-left ">Projects</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 gap-3 ">

                {/* --- Restaurant --- */}
                {ProjectsExp?.map(project =>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                        className=" rounded-xl shadow-lg sm:p-6 p-3 transition-transform duration-300">
                        <div className="flex flex-col overflow-hidden lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                            {/* Image Section */}
                            <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                                <div className="w-full h-full shadow-md">
                                    <img
                                        src={project?.image}
                                        alt="Restaurant App Project Screenshot"
                                        className="w-full h-full object-cover rounded-md mb-4"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                                <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                    <a
                                        target='_blank'
                                        href={project?.githublink}
                                        className="bg-gray-700 shadow-lg hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* GitHub Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent text-orange-400"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                                        </svg>
                                    </a>
                                    <a
                                        target='_blank'
                                        href={project.livelink}
                                        className="bg-gray-700 shadow-lg border-gray-500 hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* Live Demo Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 w-full sm:w-1/2 md:w-full">
                                <h2 className="lg:text-2xl text-xl font-semibold mb-4">{project?.tittle}</h2>
                                <div className="relative w-fit shadow-md w-full rounded-md mb-4 border border-gray-600">
                                    <div className="overflow-y-auto w-full lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                        <p className='w-full'>
                                            {project?.description1}                                        </p>
                                        <p className="mt-2 w-full">
                                            {project?.description2}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-[37.5%] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                            </div>
                        </div>
                        {/* Tech Used for Restaurant App */}
                        <div className='md:mt-2'>
                            <div className="flex lg:gap-2 flex-wrap gap-2 overflow-x-scroll no-scrollbar">
                                {project.skils.map(item =>
                                    <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">{item}</span>
                                )}

                            </div>
                        </div>
                    </motion.div>
                )

                }

            </div>

        </div>
    );
};

export default Moreproject;
