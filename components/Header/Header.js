import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import authContext from "context/auth/authContext";
import appContext from "context/app/appContext";
import { useRouter } from "next/router";

const Header = () => {
  const AuthContext = useContext(authContext)
  const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext

  const AppContext = useContext(appContext)
  const { limpiarState } = AppContext

  const router = useRouter()

  const redireccionar = () => {
    router.push("/")
    limpiarState()
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">

      <Image
        src={"/logo.svg"}
        width={'400px'}
        height={'50px'}
        alt="Node Send"
        onClick={redireccionar}
      />

      <div>
        {!usuario ? (
          <>
            <Link href="/login">
              <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2" >
                Iniciar Sesion
              </a>
            </Link>

            <Link href="/crearCuenta">
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