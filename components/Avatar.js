import Image from "next/image";

const Avatar = () => {
  return (
  <div>
    <Image src={'/avatar.png'} width={637} height={508}
    className="translate-z-0 w-full h-full"
    />
  </div>
  )
};  

export default Avatar;
