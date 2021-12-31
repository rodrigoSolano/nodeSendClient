import { REGISTRO_EXITOSO, REGISTRO_ERROR } from "types";

export default function(state, action){
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR:
      return {
        ...state,
        mensaje: action.payload
      };
    default:
      return state;
  }
}