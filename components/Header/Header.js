import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import authContext from "context/auth/authContext";

const Header = () => {
  const AuthContext = useContext(authContext)
  const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext

  useEffect(() => {
    usuarioAutenticado()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">

      <Link href="/" passHref>
        <Image src={"/logo.svg"} width={'400px'} height={'50px'} alt="Node Send" />
      </Link>

      <div>
        {!usuario ? (
          <>
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
          </>
        ) : (
          <div className="flex items-center">
            <p className="mr-2">Hola {usuario.nombre}</p>
            <button
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesion
            </button>
          </div>
        )}

      </div>

    </header>
  )
}

export default Header;