import { REGISTRO_EXITOSO } from "types";

export default function(state, action){
  switch (action.type) {
    case REGISTRO_EXITOSO:
      return {
        ...state,
        mensaje: action.payload
      };
    default:
      return state;
  }
}