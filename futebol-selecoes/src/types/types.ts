export type SelecaoType = {
  nome: string;
  titulosCopa: [{ ano: string }];
  goleadores: [{ nome: string; gols: number }];
  estadio: string;
  cores: Array<string>;
  tecnicoAtual: string;
};

export type SelecoesDetalhesType = {
  selecao: SelecaoType
}