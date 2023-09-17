import Head from "next/head";
import App from "./_app";

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
        <App />
      </main>
    </div>
  );
}
