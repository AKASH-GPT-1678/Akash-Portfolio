"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import Gmail from "../../public/gmail.png";
import { FaDownload } from "react-icons/fa6";
import Akash from "../../public/akash.jpg";

import FrontendDisplay from "./components/frontend";

export default function Home() {
  return (
    <div style={{ backgroundImage: "url('https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg')", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="h-screen p-4 md:p-10 " >

      <div className="h-screen">

        <div className="flex flex-row justify-between">

          <h1 className="

        hidden 
        
        
        bg-gradient-to-r from-purple-700 via-pink-500 to-fuchsia-400 md:inline-block text-transparent bg-clip-text text-2xl md:text-5xl font-bold after:content-['</>']">
            Akash <span></span>
          </h1>


          <ul className="flex flex-row gap-4 w-full md:w-fit  md:gap-8 text-white justify-evenly font-bold">


            <li className="font-roboto text-xl md:text-2xl cursor-pointer">Home</li>
            <li className="font-roboto text-2xl cursor-pointer">About</li>
            <li className="font-roboto text-2xl cursor-pointer">Skills</li>
            <li className="font-roboto text-2xl cursor-pointer">Project</li>
            <li className="font-roboto text-2xl cursor-pointer">Contact</li>


          </ul>




        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col   mt-30 ">
            <p className="text-white text-4xl xl:text-7xl font-bold">Hi , I'm Akash</p>

            <p className=" font-bold text-2xl lg:text-4xl mt-8   bg-gradient-to-r from-purple-700 via-pink-500 to-fuchsia-400 md:inline-block text-transparent bg-clip-text  md:text-5xl ">Full stack developer</p>

            <p className="text-white font-bold max-w-[500px]">Crafting and building modern, responsive and user-friendly web and mobile applications </p>






            <div className="flex flex-row gap-4 items-center mt-10">
              <div className="relative w-fit">

                <div className="absolute inset-0 bg-amber-400 blur-md rounded-[2rem] opacity-60 z-0" />

                <button className="relative z-10 p-4 bg-amber-400 rounded-[2rem] cursor-pointer text-black font-bold flex flex-row gap-2 items-center shadow-md">
                  Download Resume <FaDownload size={18} />
                </button>
              </div>


              <FaGithub size={24} fill="white" className="cursor-pointer" onClick={() => window.open("https://github.com/AKASH-GPT-1678", "_blank")} />
              <AiOutlineLinkedin size={24} fill="white " className="cursor-pointer bg-blue-600 overflow-hidden" />
              <Image src={Gmail} alt="gmaail" className="h-6 w-6 cursor-pointer" />

            </div>



          </div>

          <div>
            <Image src={Akash} alt="profile" className="hidden  md:inline-block rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-10">Skills</h1>

 

        <FrontendDisplay/>
        <div id="backend">

        </div>
        <div id="language">

        </div>
        <div id="devops">

        </div>
      </div>


    </div>
  );
}
       {/* <div id="frontend" className="flex flex-row gap-1 flex-wrap  max-w-[500px] border-2 border-white p-4">

          <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl">
            <Image src={ReactIcon.src} alt="react" width={100} height={100} className="h-6 w-6" />
            <p className="text-lg font-bold">React Js</p>


          </div>

          <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl">

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="bg-white rounded-full">
              <path d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z"></path>
            </svg>
            <p className="text-lg font-bold">Next Js</p>


          </div>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl">

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
            </svg>
            <p className="text-lg font-bold">Tailwindcss</p>


          </div>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl">

              
            <p className="text-lg font-bold">HTML</p>


          </div>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl">

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
            </svg>
            <p className="text-lg font-bold">CSS</p>


          </div>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl">

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
            </svg>
            <p className="text-lg font-bold">JavaScript</p>


          </div>



        </div> */}