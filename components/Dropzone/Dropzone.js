import { useContext, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import appContext from "context/app/appContext"
import authContext from "context/auth/authContext"
import clienteAxios from "services/config"
import { Formulario } from "components"

const Dropzone = () => {

  const AppContext = useContext(appContext)
  const { cargando, mostrarAlerta, subirArchivo, crearEnlace } = AppContext

  const AuthContext = useContext(authContext)
  const { usuario, autenticado } = AuthContext

  const onDropRejected = () => {
    mostrarAlerta("El archivo es demasiado grande, no debe pesar más de 100MB")
  }

  const onDropAccepted = useCallback(async acceptedFiles => {

    // Crear un formData
    const formData = new FormData()
    formData.append("archivo", acceptedFiles[0])

    const nombre_original = acceptedFiles[0].path

    // Subir archivo
    subirArchivo(formData, nombre_original)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Extraer el contenido del dropzone
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles
  } = useDropzone({ onDropAccepted, onDropRejected, maxSize: 10000000 })

  const archivos = acceptedFiles.map(archivo => (
    <li key={archivo.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded" >
      <p className="font-bold text-xl">{archivo.path}</p>
      <p className="text-sm text-gray-500">
        {(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB
      </p>
    </li>
  ))

  return (
    <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">

      {acceptedFiles.length > 0 ? (
        <div className="mt-10 w-full">
          <h4 className="text-2xl font-bold text-center mb-4">Archivos</h4>
          <ul>
            {archivos}
          </ul>

          {
            autenticado && <Formulario /> 
          }

          {cargando ? <p className="my-10 text-center text-gray-600">Subiendo archivo...</p> :
            <button
              type="button"
              className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
              onClick={() => crearEnlace()}
            >
              Crear enlace
            </button>
          }
        </div>
      ) : (
        <div  {...getRootProps()}>
          <input  {...getInputProps()} />
          {
            isDragActive
              ?
              <p className="text-2xl text-center text-gray-600">Suelta el archivo </p>
              :
              (
                <div className="text-center">
                  <p className="text-2xl text-center text-gray-600">
                    Selecciona un archivo y arrastralo aqui
                  </p>
                  <button className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800" type="button">
                    Selecciona archivos para subir
                  </button>
                </div>
              )
          }
        </div>
      )}

    </div>
  )
}

export default Dropzone;