"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import Gmail from "../../public/gmail.png";
import { FaDownload } from "react-icons/fa6";
export default function Home() {
  return (
    <div style={{ backgroundImage: "url('https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg')", height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="h-screen p-4 md:p-10 " >


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
      <div className="flex flex-col   mt-30">
        <p className="text-white text-4xl xl:text-7xl font-bold">Hi , I'm Akash</p>

        <p className=" font-bold text-2xl lg:text-4xl mt-8   bg-gradient-to-r from-purple-700 via-pink-500 to-fuchsia-400 md:inline-block text-transparent bg-clip-text  md:text-5xl ">Full stack developer</p>

        <p className="text-white font-bold max-w-[500px]">Crafting and building modern, responsive and user-friendly web and mobile applications </p>






        <div className="flex flex-row gap-4 items-center mt-10">
          <button className="p-4 bg-amber-400 max-w-[300px] rounded-4xl cursor-pointer text-black font-bold flex flex-row gap-2 items-center">Download Resume <FaDownload size={18} /></button>
          <FaGithub size={24} fill="white" className="cursor-pointer" onClick={() => window.open("https://github.com/AKASH-GPT-1678", "_blank")}/>
          <AiOutlineLinkedin size={24} fill="white " className="cursor-pointer bg-blue-600 overflow-hidden" />
          <Image src={Gmail} alt="gmaail" className="h-6 w-6 cursor-pointer" />

        </div>



      </div>


    </div>
  );
}
