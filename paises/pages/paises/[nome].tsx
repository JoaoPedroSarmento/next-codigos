// pages/paises/[nome].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { fetchPais, fetchPaises } from "@/src/services/paises";
import { PaisInformacoes } from "@/src/types/paises";
import Head from "next/head";
import PaisCard from "@/src/components/PaisCard";

export const getStaticPaths: GetStaticPaths = async () => {
  const paises = await fetchPaises();

  const paths = paises.map((pais: PaisInformacoes) => ({
    params: { nome: pais.name.common },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const nome = params?.nome;
  if (typeof nome == "string") {
    const pais = await fetchPais(nome);

    return { props: { pais }, revalidate: 10 };
  }
  return {
    redirect: { destination: "/", permanent: false },
  };
};

const PaisDetails = ({ pais }: { pais: PaisInformacoes }) => {
  return (
    <>
      <Head>
        <title>{pais.name.common} - Detalhes</title>
      </Head>
      <PaisCard pais={pais} />
    </>
  );
};

export default PaisDetails;
