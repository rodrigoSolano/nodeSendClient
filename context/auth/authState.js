import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "services/config";

import { REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR } from "types";

const AuthState = ({ children }) => {

  // Definir state inicial
  const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem("token") : "",
    autenticado: typeof window !== 'undefined' ? (localStorage.getItem("token") ? true : null) : null ,
    usuario: null,
    mensaje: null,
  }

  // Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Registrar usuario
  const registrarUsuario = async (datos) => {
    try{
      const respuesta = await clienteAxios.post('/api/usuarios', datos);
      console.log(respuesta);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data.msg
      });
    }catch(error){
      console.log("Error al registrar usuario");
      console.log(error);
      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg
      });
    }
  }

  // Autenticar usuario
  const iniciarSesion = async (datos) => {
    try{
      const respuesta = await clienteAxios.post('/api/auth', datos);
      console.log(respuesta);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data.token
      });
    }catch(error){
      console.log("Error al iniciar sesion");
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      });
    }
  }

  return (
    <authContext.Provider value={{
      token: state.token,
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      registrarUsuario,
      iniciarSesion
    }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthState;