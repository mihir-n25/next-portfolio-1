import React, {useState} from "react";
import ProjectsBtn from '../../components/ProjectsBtn'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";

import { TbBrandNextjs , TbApi } from "react-icons/tb";
import { SiMongodb , SiExpress , SiTailwindcss , SiFlutter } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io";

// import Avatar from "../../components/Avatar";
// import Circles from '../../components/Circles'
import { motion } from "framer-motion";
import {fadeIn} from '../../variants';
import CountUp from "react-countup";

const About = () => {
  const [index , setIndex] = useState(0);
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
    <div className="flex-1 flex flex-col justify-center">
      <motion.h2 
       variants={fadeIn('right' , 0.6)}
       initial= 'hidden'
       animate= 'show'
       exit= 'hidden'
      className="h2 mt-10">About <span className="text-accent">Me</span></motion.h2>
      <motion.p 
       variants={fadeIn('right' , 0.9)}
       initial= 'hidden'
       animate= 'show'
       exit= 'hidden'
      className="max-w-[500px] mx:auto px-2 xl:px-0">
        Greetings..! I am Mihir Nebani , a certified App Developer in Flutter and Dart and a dedicated full Stack web Developer with a solid foundation in ReactJS . I am here to translate your visionary ideas into digital reality through some good lines of code . As a passionate fresher in this field I bring a unique blend of creativity in every project . <br/>
        <span className="hidden xl:flex">Outside of coding , currently I am pursuing Computer Science and Engineering as a 3rd-year student in B.Tech , I found joy in singing , badminton , cricket and travelling that fuel my creativity and Peronal growth . <br/>
        {/* Feel free to explore my project and if you're interested in collaborating on a project. Let's build something amazing together!  */}
       </span>
      </motion.p>
      <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mt-10">
    <div className="flex flex-1 xl:gap-x-6">
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:abso0lute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={14} duration={5}/>+
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Months of Experience
      </div>
    </div>
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:abso0lute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={34} duration={5}/>+
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Finished Projects
      </div>
    </div>
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:abso0lute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={1} duration={5}/>+
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Satisfied Clients
      </div>
    </div>
      </div>
    </div>
    </div>
   
    <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            <motion.div 
             variants={fadeIn('left' , 0.9)}
             initial= 'hidden'
             animate= 'show'
             exit= 'hidden'
            className="text-xl xl:text-5xl border-b-2 mt-2 xl:border-b-4 border-accent hover:border-b-2"
            >
              Skills :-
            </motion.div>
          
      </div>
    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
         <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
          <div className="font-light mb-2 md:mb-0">Web Development</div>
          <div className="hidden md:flex">-</div>
          <div className="flex gap-x-4 text-2xl">
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaReact />
          <SiMongodb/>
          <SiExpress/>
          <FaNodeJs/>
          <TbBrandNextjs/>
          <TbApi/>
          <SiTailwindcss/>
          <FaBootstrap/>
            </div>
        </div>
      </div>
      <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
        <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
          <div className="font-light mb-2 md:mb-0">App Development</div>
          <div className="hidden md:flex">-</div>
          <div className="flex gap-x-4 text-2xl">
          <IoLogoAndroid/>
          <SiFlutter/>
          <DiFirebase/>
          <FaJava/>
            </div>
        </div>
      </div>
      <motion.p 
       variants={fadeIn('left' , 0.4)}
       initial= 'hidden'
       animate= 'show'
       exit= 'hidden'
      className='hidden xl:flex xl:text-md text-white/80 mt-12'>Feel free to explore my project and contact me if you're interested in collaborating on a project or you have any question . <br/>
      Let's build something amazing together! </motion.p>
      <motion.div
       variants={fadeIn('up' , 0.6)}
       initial= 'hidden'
       animate= 'show'
       exit= 'hidden'
      className="hidden xl:flex justify-center mt-4">
      <ProjectsBtn/>
      </motion.div>
    </div>
    </div>
  </div>;
}

export default About;
