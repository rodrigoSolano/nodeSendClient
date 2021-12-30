import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Image src={"/logo.svg"} width={'400px'} height={'50px'} alt="Node Send" />
    </header>
  )
}

export default Header;