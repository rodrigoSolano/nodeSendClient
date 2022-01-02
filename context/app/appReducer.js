import {
  MOSTRATRAR_ALERTA,
  OCULTAR_ALERTA,
  SUBIR_ARCHIVO,
  SUBIR_ARCHIVO_ERROR,
  SUBIR_ARCHIVO_EXITOSO,
  CREAR_ENLACE_EXITOSO,
  CREAR_ENLACE_ERROR,
  LIMPIAR_STATE,
  AGREGAR_PASSWORD,
  AGREGAR_DESCARGAS
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
    case CREAR_ENLACE_EXITOSO:
      return {
        ...state,
        url: action.payload
      }
    case LIMPIAR_STATE:
      return {
        mensaje_archivo: '',
        nombre: '',
        nombre_original: '',
        cargando: false,
        descargas: 1,
        password: '',
        autor: null,
        url: '',
      }
    case AGREGAR_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case AGREGAR_DESCARGAS:
      return {
        ...state,
        descargas: action.payload
      }
    default:
      return state;
  }
}

export default appReducer;