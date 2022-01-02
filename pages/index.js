import { useContext, useEffect } from "react"
import Link from "next/link"
import { Layout, Dropzone, Alerta } from "components"
import authContext from "context/auth/authContext"
import appContext from "context/app/appContext"

export default function Home() {

  const AuthContext = useContext(authContext)
  const { usuarioAutenticado } = AuthContext

  const AppContext = useContext(appContext)
  const { mensaje_archivo, url } = AppContext

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">

        {url ? (
          <>
            <p className="text-center text-2xl mt-10">
              <span className="font-bold text-red-700 text-3xl uppercase">
                Tu url es: {" "}
              </span>
              <a 
                className="text-blue-500"
                href={`${process.env.FRONTEND_URL}enlaces/${url}`} 
                target={"_blank"}
                rel="noreferrer"
              >
                {`${process.env.FRONTEND_URL}enlaces/${url}`}
              </a>
            </p>
            <button
              type="button"
              className="bg-red-500 hover:bg-gray-900 w-full py-2 text-white uppercase font-bold cursor-pointer mt-10"
              onClick={() =>
                navigator.clipboard.writeText(`${process.env.FRONTEND_URL}enlaces/${url}`)
              }
            >
              Copiar Enlace
            </button>
          </>
        ) : (
          <>
            {mensaje_archivo && <Alerta />}
            <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
              <Dropzone />
              <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
                <h2 className="text-3xl font-sans font-bold text-gray-800 my-4">
                  Compartir archivos de forma sencilla, segura y privada
                </h2>
                <p className="text-md leading-loose">
                  <span className="text-red-500 font-bold">ReactNodeSend</span> te permite compartir archivos con cifrado de extremo a extremo, y un archivo es eliminado despues de ser descargado. Asi que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en linea para siempre.
                </p>
                <Link href="/crearCuenta">
                  <a className="text-red-500 font-bold text-md hover:text-red-700">
                    Crea una cuenta para mayores beneficios
                  </a>
                </Link>
              </div>
            </div>
          </>
        )}

      </div>
    </Layout >
  )
}
