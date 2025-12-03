import React from 'react';
import ProjectDetails from '../data/projectInfo,';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { IoCaretForwardCircle } from "react-icons/io5";


const ProjectDiplay = () => {
    return (
        <div >

            <div className='flex items-center justify-center'>
                <p className='text-white text-4xl font-bold'>Projects</p>

            </div>

            <div className='flex flex-row flex-wrap gap-10 justify-center mt-10'>

                {
                    ProjectDetails.map((item, index) => (
                        <div key={index} className="p-4">
                            <div className="max-w-[300px] min-w-[150px] bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col">

                    
                                <div className="w-full h-40 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt="projectImage"
                                        width={300}
                                        height={160}
                                        className="w-full h-full object-cover rounded-t-xl"
                                    />
                                </div>

                       
                                <div className="flex flex-wrap gap-2 p-3">
                                    {item.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full cursor-pointer"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-col p-3 flex-1">
                                    <h3 className="text-white text-lg font-bold mb-1">{item.name}</h3>
                                    <p className="text-gray-300 text-sm">{item.description}</p>

                                    {/* Buttons */}
                                    <div className="flex mt-4 gap-3">
                                        <button
                                            onClick={() => window.open(item.repositoryUrl)}
                                            className="flex-1 flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 font-bold py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
                                        >
                                            <FaGithub size={20} /> Repository
                                        </button>
                                        <button
                                            onClick={() => window.open(item.liveUrl)}
                                            className="flex-1 flex items-center justify-center gap-2 border-2 border-green-500 text-green-500 font-bold py-2 rounded-lg hover:bg-green-500 hover:text-white transition-all"
                                        >
                                            <IoCaretForwardCircle size={20} /> Live
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))


                }


            </div>



        </div>
    )
};


export default ProjectDiplay;
