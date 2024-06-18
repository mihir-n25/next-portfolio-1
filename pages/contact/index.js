import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return <div className='h-full bg-primary/30 '>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      <div className='flex flex-col w-full max-w-[700px]'>
        <h2 className='h2 text-center mb-12'>
          Let's <span className='text-accent'>Connect</span>.
        </h2>
        <form className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          <div className='flex gap-x-6 w-full'>
            <input type='text' placeholder='name' className='input'/>
            <input type='email' placeholder='email' className='input'/>
          </div>
          <input type='text' placeholder='subject' className='input'/>
          <textarea placeholder='message' className='textarea'></textarea>
          <button className='btn rounded-full max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group border hover:shadow-md hover:shadow-accent'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duartion-500'>Let's Talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
          </button>
        </form>
      </div>
    </div>
  </div>;
};

export default Contact;
