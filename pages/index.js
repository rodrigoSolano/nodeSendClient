import { useContext, useEffect } from "react"
import Link from "next/link"
import { Layout } from "components"
import authContext from "context/auth/authContext"

export default function Home() {
  
  const AuthContext = useContext(authContext)
  const { usuarioAutenticado } = AuthContext

  useEffect(() => {
    usuarioAutenticado()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <div className="lg-flex md:shadow-lg p-5 bg-white rounded-lg py-10 ">
        <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
          <p>Dropzone aqui</p>
        </div>
          <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
            <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">
              Compartir archivos de forma sencilla, segura y privada
            </h2>
            <p className="text-lg leading-loose">
              <span className="text-red-500 font-bold">ReactNodeSend</span> te permite compartir archivos con cifrado de extremo a extremo, y un archivo es eliminado despues de ser descargado. Asi que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en linea para siempre.
            </p>
            <Link href="/crearCuenta">
              <a className="text-red-500 font-bold text-lg hover:text-red-700">
                Crea una cuenta para mayores beneficios
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
