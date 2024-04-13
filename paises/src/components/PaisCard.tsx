import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { PaisInformacoes } from "../types/paises";

const PaisCard: React.FC<{ pais: PaisInformacoes }> = ({ pais }) => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        height="400px"
        src={pais?.flags?.svg}
        alt={pais?.name?.common}
      />
      <CardBody>
        <CardTitle tag="h4" className="mb-3 display-4">
          {pais.name?.common}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          CCN3: {pais.ccn3}
        </CardSubtitle>
        <ListGroup>
          <ListGroupItem>
            <h2>Capital:</h2> {pais?.capital?.join(", ")}
          </ListGroupItem>
          <ListGroupItem>
            <h2>Alt Spellings:</h2> {pais?.altSpellings?.join(", ")}
          </ListGroupItem>
          <ListGroupItem>
            <h2>Top-Level Domain:</h2> {pais?.tld?.join(", ")}
          </ListGroupItem>
          <ListGroupItem>
            <h2>Códigos:</h2> {pais?.cca2}, {pais?.ccn3}, {pais?.cca3},{" "}
            {pais?.cioc}
          </ListGroupItem>
          <ListGroupItem>
            <h2>Moeda:</h2> {pais?.currencies?.AOA?.name} (
            {pais?.currencies?.AOA?.symbol})
          </ListGroupItem>
          <ListGroupItem>
            <h2>Línguas:</h2> {pais?.languages?.por}
          </ListGroupItem>
          <ListGroupItem>
            <h2>População:</h2> {pais?.population}
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default PaisCard;
