import SelecaoDetalhes from "@/src/components/SelecaoDetalhes";
import { fetchSelecao, fetchSelecoes } from "@/src/services/selecoes";
import { SelecaoType } from "@/src/types/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const selecoes: SelecaoType[] = await fetchSelecoes();
  const paths = selecoes.map((sele) => {
    return {
      params: {
        nome: sele.nome.toString(),
      },
    };
  });
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const nome = context.params?.nome;
  if (typeof nome === "string") {
    try {
      const selecao = await fetchSelecao(nome);
      return {
        props: {
          selecao,
        },
      };
    } catch (e) {
      return {
        redirect: { destination: "/", permanent: false },
      };
    }
  }
  return {
    redirect: { destination: "/", permanent: false },
  };
};

const selecaoDetalhesPage: NextPage<SelecaoType> = (props: {
  selecao?: SelecaoType;
}) => {
  return <SelecaoDetalhes selecao={props.selecao!} />;
};

export default selecaoDetalhesPage;
