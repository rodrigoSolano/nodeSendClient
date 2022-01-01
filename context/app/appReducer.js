import {
  MOSTRATRAR_ALERTA,
  OCULTAR_ALERTA,
  SUBIR_ARCHIVO_ERROR,
  SUBIR_ARCHIVO_EXITOSO,
  CREAR_ENLACE_EXITOSO,
  CREAR_ENLACE_ERROR,
} from "types"

const appReducer = (state, action) => {
  switch (action.type) {
    case MOSTRATRAR_ALERTA:
      return {
        ...state,
        mensaje_archivo: action.payload,
      };
    case OCULTAR_ALERTA:
      return {
        ...state,
        mensaje_archivo: "",
      };
    default:
      return state;
  }
}

export default appReducer;