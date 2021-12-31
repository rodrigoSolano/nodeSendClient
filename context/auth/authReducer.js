import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR, 
  LOGIN_EXITOSO, 
  LOGIN_ERROR,
  USUARIO_AUTENTICADO 
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
    default:
      return state;
  }
}