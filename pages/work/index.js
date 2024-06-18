import WorkSlider from "../../components/WorkSlider";
import { motion } from "framer-motion";
import {fadeIn} from '../../variants'
import { FaDiagnoses } from "react-icons/fa";


const Work = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    <div className="container mx-auto ">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2 
          variants={fadeIn('up' , 0.2)}
          initial= 'hidden'
          animate= 'show'
          exit= 'hidden'
          className="h2 xl:mt-12">
          My <span className="text-accent">Work</span>.
          </motion.h2>

          <motion.h2 
          variants={fadeIn('up' , 0.7)}
          initial= 'hidden'
          animate= 'show'
          exit= 'hidden'
          className="text-2xl font-bold xl:text-4xl xl:mt-4">
            What I did ?
          </motion.h2>
          <motion.p 
           variants={fadeIn('up' , 0.2)}
           initial= 'hidden'
           animate= 'show'
           exit= 'hidden'
          className="mt-4 max-w-[400px] mx-auto lg:mx-0">
            Here, are my some of the best projects,clones on web and app . More of them are posted on my repository <br/>
            Kindly Visit :)
          </motion.p>
          </div>
          <motion.div 
           variants={fadeIn('down' , 1)}
           initial= 'hidden'
           animate= 'show'
           exit= 'hidden'
          className="w-full xl:max-w-[65%]">
          <WorkSlider/>
          </motion.div>
      </div>
    </div>
  </div>;
};

export default Work;