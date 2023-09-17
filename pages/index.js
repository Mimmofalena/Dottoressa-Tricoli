import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dottoressa Tricoli</title>
        <meta
          name="Dottoressa Tricoli"
          content="Medico di famiglia a Palermo"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar></Navbar>
        <h1>Hello Main</h1>
      </main>
      <footer> Footer</footer>
    </div>
  );
}
