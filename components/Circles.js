import Image from "next/image";

const Circles = () => {
  return <div className="w-[250px] xl:w-[350px] absolute -right-16 -bottom-2 mix-blend-color-dodge  animate-pulse duration-75 z-15 ">
    <Image src={'/circles.png'} width={260} height={200} className="w-full h-full "/>
  </div>;
};

export default Circles;
