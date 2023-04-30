import React, { useState, useEffect } from 'react';

export default function Filmes() {
  const [listFilmes, setlistFilmes] = useState(null);

  // const options = {
  //   method: 'GET'
  // };

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => setlistFilmes(data))
      .catch(err => console.error(err))
  }, []);

  if (!listFilmes) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div>Dados: {listFilmes.map((filme, index) => <div key={index}>{filme.titulo}</div>)}</div>
    </div>
  );
}