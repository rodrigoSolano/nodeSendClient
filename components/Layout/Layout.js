/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { Header } from "components";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Node Send</title>
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </div>  
    </>
  )
}

export default Layout;