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
  console.log("Enlace: ", enlace);
  return (
    <Layout>
      <h1 className="text-4xl text-center text-gray-700">
        Descarga tu archivo
        <div className="flex items-center justify-center mt-10">
          <a
            href={`${process.env.API_URL}/api/archivos/${enlace.archivo}`}
            className="bg-red-500 text-center px-10 py-3 rounden uppercase font-bold text-white cursor-pointer"
            download
          >
            Aqui
          </a>
        </div>
      </h1>
    </Layout>
  )
}

export default Enlace;