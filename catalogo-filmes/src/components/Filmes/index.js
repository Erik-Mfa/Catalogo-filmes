import React, { useState, useEffect } from 'react';
import Assistido from '../Assistido/index';
import './filmes.css';

export default function Filmes() {
  const [listFilmes, setlistFilmes] = useState(null)

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
    <div className="container text-center">
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      {listFilmes.map((filme, i) => (
        <div className="col" key={i}>
          <div className="card">
            <img src={filme.poster} className="card-img-top img-thumbnail" />
            <div className="card-body">
              <h6 className="card-title">{filme.titulo} ({filme.ano}) </h6>
              <p>{filme.nota}</p>
              <Assistido
                  javisto={filme.assistido}
                />
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>
  );
}