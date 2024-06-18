import Link from "next/link";
import {RiInstagramLine , RiFacebookFill , RiLinkedinFill , RiGithubLine , RiTwitterFill} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 lg:text-xl">
    <Link href={""} className="text-accent transition-ease duration-300 delay-900 border-2 rounded-xl border-accent p-1 hover:bg-accent hover:text-primary shadow-md shadow-accent hover:shadow-none">
      <RiFacebookFill/>
    </Link>
    <Link href={""} className="text-accent border-2 rounded-xl border-accent p-1 transition-all duration-300 hover:bg-accent hover:text-primary shadow-md shadow-accent hover:shadow-none">
      <RiInstagramLine/>
    </Link>
    <Link href={""} className="text-accent border-2 rounded-xl border-accent p-1 transition-all duration-300 hover:bg-accent hover:text-primary shadow-md shadow-accent hover:shadow-none">
      <RiLinkedinFill/>
    </Link>
    <Link href={""} className="text-accent border-2 rounded-xl border-accent p-1 transition-all duration-300 hover:bg-accent hover:text-primary shadow-md shadow-accent hover:shadow-none">
      <RiGithubLine/>
    </Link>
    <Link href={""} className="text-accent border-2 rounded-xl border-accent p-1 transition-all duration-300 hover:bg-accent hover:text-primary shadow-md shadow-accent hover:shadow-none">
      <RiTwitterFill/>
    </Link>
  </div>;
};

export default Socials;
