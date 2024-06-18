import ServiceSlider from "../../components/ServiceSlider";
import Bulb from '../../components/Bulb'
import { motion } from "framer-motion";
import {fadeIn} from '../../variants'
import { FaDiagnoses } from "react-icons/fa";


const Services = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    <div className="container mx-auto ">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2 
          variants={fadeIn('up' , 0.2)}
          initial= 'hidden'
          animate= 'show'
          exit= 'hidden'
          className="h2 xl:mt-8">
          My <span className="text-accent">Services</span>.
          </motion.h2>
          <motion.h3 
          variants={fadeIn('up' , 0.2)}
          initial= 'hidden'
          animate= 'show'
          exit= 'hidden'
          className="text-2xl font-bold xl:text-4xl xl:mt-4">
          What I do ?
          </motion.h3>
          <motion.p 
           variants={fadeIn('up' , 0.4)}
           initial= 'hidden'
           animate= 'show'
           exit= 'hidden'
          className="mt-6 max-w-[400px] mx-auto lg:mx-0 text-slate-50">
             I specialize in delivering dynamic responsive websites , with this I can construct some pretty mobile apps for you :)  
          </motion.p>
          </div>
          <motion.div 
           variants={fadeIn('down' , 0.6)}
           initial= 'hidden'
           animate= 'show'
           exit= 'hidden'
          className="w-full xl:max-w-[65%]">
          <ServiceSlider/>
          </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>;
};

export default Services;