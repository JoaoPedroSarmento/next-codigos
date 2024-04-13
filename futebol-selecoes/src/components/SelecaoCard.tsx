import React from "react";
import * as ReacStrap from "reactstrap";
import { SelecaoType } from "../services/selecoes";
import Link from "next/link";

const SelecaoCard: React.FC<{ selecao: SelecaoType }> = (props) => {
  const { selecao } = props;
  return (
    <ReacStrap.Container>
      <ReacStrap.Row>
        <h1>{selecao.nome}</h1>
      </ReacStrap.Row>
      <ReacStrap.Row>
        <Link href={`/detalhes/${selecao.nome}`}>
          <ReacStrap.Button>Ver detalhes sobre {selecao.nome}</ReacStrap.Button>
        </Link>
      </ReacStrap.Row>
    </ReacStrap.Container>
  );
};

export default SelecaoCard;
