"use client";
import { useState, useEffect } from "react";

function AsyncComponent() {
  const [data, setData] = useState<any>(null);

  // Simulando uma operação assíncrona, como uma chamada de API
  const fetchData = async () => {
    // Aguarda 2 segundos antes de resolver a Promise
    await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
    setData("Dados carregados!");
  };

  if (!data) {
    fetchData();
  } else {
    return <div>Dados....</div>;
  }
}

export default AsyncComponent;
