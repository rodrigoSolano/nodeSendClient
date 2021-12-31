import { useContext, useEffect } from "react"
import { Layout } from "components"
import authContext from "context/auth/authContext"

export default function Home() {
  
  const AuthContext = useContext(authContext)
  const { usuarioAutenticado } = AuthContext

  useEffect(() => {
    usuarioAutenticado()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])

  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  )
}
