import Link from "next/link";
import { SelecoesDetalhesType } from "../types/types";

const SelecaoDetalhes: React.FC<SelecoesDetalhesType> = ({ selecao }) => {
  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "10px",
          }}
        >
          {selecao.nome}
        </h1>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#555" }}>Títulos de Copa</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {selecao.titulosCopa.map((titulo, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {titulo.ano}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#555" }}>Goleadores</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {selecao.goleadores.map((goleador, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {goleador.nome} - {goleador.gols} gols
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#555" }}>Estádio</h2>
          <p style={{ margin: 0 }}>{selecao.estadio}</p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#555" }}>Cores</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selecao.cores.map((cor, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: cor,
                  padding: "5px",
                  margin: "5px",
                  color: "#fff",
                  borderRadius: "3px",
                }}
              >
                {cor}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#555" }}>Técnico Atual</h2>
          <p style={{ margin: 0 }}>{selecao.tecnicoAtual}</p>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <Link href="/">Voltar</Link>
        </section>
      </div>
    </>
  );
};

export default SelecaoDetalhes;
