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

            <div className='flex flex-row flex-wrap gap-10'>

                {
                    ProjectDetails.map((item, index) => (
                        <div key={index}>
                            <div className='max-w-[250px] md:max-w-[300px] flex flex-col min-w-[120px] border-2 border-white p-1'>

                                <div>


                                    <Image src={item.image} alt='projectImage' width={200} height={200} className='w-full h-40 rounded-lg' />
                                </div>
                                <div className='w-full flex flex-row flex-wrap gap-3 p-2'>
                                    {
                                        item.tools.map((item, index) => (
                                            <div key={index} className='flex '>
                                                <p className='text-white font-semibold p-1 text-md  bg-purple-700 '>{item}</p>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='flex flex-col p-1'>
                                    <p className='text-white font-bold'>{item.name}</p>
                                    <p className='text-white'>{item.description}</p>


                                    <div className='flex flex-row justify-between mt-6'>
                                        <button className='p-2 border-2 border-white text-white flex flex-row gap-2 items-center justify-center font-bold cursor-pointer' onClick={() => window.open(item.repositoryUrl)}>
                                            Repository

                                            <FaGithub size={24} />

                                        </button>
                                        <button className='p-2 border-2 border-white text-white flex flex-row gap-2 items-center justify-center font-bold px-6 cursor-pointer' onClick={() => window.open(item.liveUrl)}>
                                            Live

                                            <IoCaretForwardCircle size={24} />



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
