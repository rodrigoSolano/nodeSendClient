import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">

      <Link href="/" passHref>
        <Image src={"/logo.svg"} width={'400px'} height={'50px'} alt="Node Send" />
      </Link>

      <div>

        <Link  href="/login">
          <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2" >
            Iniciar Sesion
          </a>
        </Link>

        <Link  href="/crearCuenta">
          <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">
            Crear Cuenta
          </a>
        </Link>

      </div>

    </header>
  )
}

export default Header;