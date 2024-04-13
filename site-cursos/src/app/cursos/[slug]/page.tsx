import { CursoInterface } from "@/interface/interface";
import { fetchCursos, fetchCurso } from "@/services/services";
import { DadosCursoType } from "@/types/types";
import { Metadata } from "next";
import { Container, Row, Col } from "reactstrap";

const paramsUrls: string[][] = [];
export async function generateMetadata({
  params,
}: {
  params: { slug: Array<string> };
}): Promise<Metadata> {
  const [id] = params.slug;
  const curso = await fetchCurso(id);

  return {
    title: `Cursos  ${curso?.titulo} `,
    description: curso.descricao,
  };
}
export async function generateStaticParams() {
  const cursos: DadosCursoType = await fetchCursos();
  const params = cursos.dados.map((curso) => ({
    slug: curso.id.toString(),
  }));
  return params;
}
const cursoDetalhesPage = async ({
  params,
}: {
  params: { slug: Array<string> };
}) => {
  const [id, descricaoURL] = params.slug;
  const curso: CursoInterface = await fetchCurso(id);
  const temUrl = () => {
    return paramsUrls.find((url) => url.includes(descricaoURL));
  };
  if (temUrl()) {
    return (
      <>
        <h2>Descrição: {curso.descricao}</h2>
      </>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <h2>{curso.titulo}</h2>
          <p>Categoria: {curso.categoria}</p>
          <p>Instrutor: {curso.instrutor}</p>
          <p>Duração: {curso.duracao}</p>
          <p>Preço: {curso.preco}</p>
          {/* <Link href={`/descricao`}>Ver descrição do curso</Link> */}
        </Col>
      </Row>
    </Container>
  );
};
export default cursoDetalhesPage;
