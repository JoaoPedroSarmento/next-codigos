import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { fetchPaises } from "@/src/services/paises";
import { PaisInformacoes } from "@/src/types/paises";
import estilosPais from "@/styles/Pais.module.css";
import { Button } from "reactstrap";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const paises = await fetchPaises();
  return {
    props: {
      paises,
    },
  };
};
export default function Home(props: { paises: Array<PaisInformacoes> }) {
  return (
    <>
      <Head>
        <title>Países</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={estilosPais.paises}>
        {props.paises.map((pais: PaisInformacoes) => (
          <div className={estilosPais.pais}>
            <h1>{pais.name.common}</h1>
            <Image
              src={pais.flags.svg}
              alt={pais.name.common}
              width={200}
              height={150}
            />
            <Link href={`/paises/${pais.name.common}`}>
              <Button>Ver detalhes sobre {pais.name.common}</Button>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
