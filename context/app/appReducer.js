import {
  MOSTRATRAR_ALERTA,
  OCULTAR_ALERTA,
  SUBIR_ARCHIVO,
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
    case SUBIR_ARCHIVO:
      return {
        ...state,
        cargando: true,
      };
    case SUBIR_ARCHIVO_EXITOSO:
      return {
        ...state,
        nombre: action.payload.nombre,
        nombre_original: action.payload.nombre_original,
        cargando: false,
      };
    case SUBIR_ARCHIVO_ERROR:
      return {
        ...state,
        mensaje_archivo: action.payload,
        cargando: false,
      };
    default:
      return state;
  }
}

export default appReducer;