import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import clienteAxios from "services/config"

const Dropzone = () => {



  return (
    <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
      Dropzone aqui
    </div>
  )
}

export default Dropzone;