"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import Gmail from "../../public/gmail.png";
import { FaDownload } from "react-icons/fa6";
import Akash from "../../public/akash.jpg";

import FrontendDisplay from "./components/frontend";
import LanguagesDisplay from "./components/languages";
import BackendDisplay from "./components/backend";
import DevopsDisplay from "./components/devops";
import OtherSkills from "./components/otherskills";
import ProjectDiplay from "./components/projects";
import ContactDisplay from "./components/contact";

export default function Home() {
  return (
    <div style={{ backgroundImage: "url('https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg')", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="h-screen p-4 md:p-10 w-full " >

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
            <p className="text-white text-4xl xl:text-7xl font-bold">Hi , I&apos;m Akash</p>

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

      <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center">

        {/* Frontend */}
        <div id="frontend" className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">Frontend</h1>
          </div>
          <FrontendDisplay />
        </div>

        {/* Backend */}
        <div id="backend" className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">Backend</h1>
          </div>
          <BackendDisplay />
        </div>

        {/* Languages */}
        <div id="language" className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">Languages</h1>
          </div>
          <LanguagesDisplay />
        </div>

        {/* DevOps */}
        <div id="devops" className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">DevOps</h1>
          </div>
          <DevopsDisplay />
        </div>

        {/* Other Skills */}
        <div id="other-skills" className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">Other Skills</h1>
          </div>
          <OtherSkills />
        </div>

      </div>

      <div className="mt-20">

        <ProjectDiplay />
      </div>


      <div className="w-full border-2 border-white">
        <div className="flex items-center justify-center">
          <ContactDisplay/>

        </div>

      </div>
   



    </div>
  );
}
