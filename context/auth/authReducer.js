import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR, 
  LOGIN_EXITOSO, 
  LOGIN_ERROR,
  USUARIO_AUTENTICADO,
  CERRAR_SESION 
} from "types";

export default function(state, action){
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload
      };
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        autenticado: true
      };
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload
      }
    case CERRAR_SESION:
      localStorage.removeItem('token');
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: false
      }
    default:
      return state;
  }
}