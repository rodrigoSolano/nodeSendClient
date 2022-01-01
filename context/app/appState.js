import { useContext,useReducer } from "react";
import appContext from "./appContext";
import appReducer from "./appReducer";
import {
  MOSTRATRAR_ALERTA,
  SUBIR_ARCHIVO_ERROR,
  SUBIR_ARCHIVO_EXITOSO,
  CREAR_ENLACE_EXITOSO,
  CREAR_ENLACE_ERROR,
} from "types"

const AppState = ( {children} ) => {


  
  return (
    <appContext.Provider value={{}}>
      {children}
    </appContext.Provider>
  )
}

export default AppState;