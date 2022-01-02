import { useState, useContext } from "react";
import appContext from "context/app/appContext";
import authContext from "context/auth/authContext";

const Formulario = () => {

  const [tienePassword, setTienePassword] = useState(false)

  const AppContext = useContext(appContext)
  const { agregarPassword, agregarDescargas } = AppContext

  return (
    <div className="w-full mt-20 ">
      <div>
        <label className="text-lg text-gray-800">Eliminar tras: </label>
        <select 
          className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
          onChange={e => agregarDescargas(e.target.value)}
        >
          <option value="" selected disabled>-- Selecciona --</option>
          <option value="1" >1 descarga</option>
          <option value="5" >5 descargas</option>
          <option value="10" >10 descargas</option>
          <option value="20" >20 descargas</option>
        </select>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <label className="text-lg text-gray-800 mr-2">
            Proteger con contraseña
          </label>
          <input
            type="checkbox"
            onChange={() => setTienePassword(!tienePassword)}
          />
        </div>

        {tienePassword &&
          <input
            type="password"
            className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
            onChange={ e => agregarPassword(e.target.value) }
          />
        }

      </div>

    </div>
  )
}

export default Formulario;