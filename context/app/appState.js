import { useContext, useReducer } from "react";
import appContext from "./appContext";
import appReducer from "./appReducer";
import {
  MOSTRATRAR_ALERTA,
  OCULTAR_ALERTA,
  SUBIR_ARCHIVO_ERROR,
  SUBIR_ARCHIVO_EXITOSO,
  CREAR_ENLACE_EXITOSO,
  CREAR_ENLACE_ERROR,
} from "types"

const AppState = ({ children }) => {

  const initialState = {
    mensaje_archivo: '',
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Muestra una alerta
  const mostrarAlerta = msg => {
    console.log(msg);
    dispatch({
      type: MOSTRATRAR_ALERTA,
      payload: msg
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 3000);

  }

  return (
    <appContext.Provider value={{
      mensaje_archivo: state.mensaje_archivo,
      mostrarAlerta
    }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState;