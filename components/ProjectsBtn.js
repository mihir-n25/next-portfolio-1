import Image from 'next/image';

import Link from 'next/link'

import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return <div>
    <Link href={'/work'}
    className='w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-center bg-no-repeat group'
    >
      <Image src={'/rounded-text.png'} width='125' height='125' 
      className='animate-spin-slow w-full h-full max-w-[125px] max-h-[125px]'
      />
      <HiArrowRight 
      className='absolute text-4xl text-bold group-hover:translate-x-7 group-hover:text-accent transition-all duration-300'
      />
    </Link>
  </div>;
};

export default ProjectsBtn;
