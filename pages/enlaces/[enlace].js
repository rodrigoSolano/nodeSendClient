import { Layout } from "components";
import clienteAxios from "services/config";

export async function getServerSideProps({ params }) {
  const { enlace } = params;
  const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);
  return {
    props: {
      enlace: resultado.data,
    },
  }
}

export async function getServerSidePaths() {
  const enlaces = await clienteAxios.get('/api/enlaces');
  console.log(enlaces);
  return {
    paths: enlaces.data.enlaces.map(enlace => ({
      params: { enlace: enlace.url },
    })),
    fallback: false,
  }
}

const Enlace = ({ enlace }) => {
  console.log("Enlace: ",enlace);
  return (
    <Layout>
      Desde enlace JS
    </Layout>
  )
}

export default Enlace;