import Image from "next/image";

const Bulb = () => {
  return <div className="absolute bottom-0 -left-36 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[210px] xl:w-[260px] h-[280px]">
    <Image src={'/bulb.png'} width={260} height={150} />
  </div>;
};

export default Bulb;
