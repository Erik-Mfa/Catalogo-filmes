import React, { useState, useEffect } from 'react';

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

  function Assitido({ javisto }) {
    if (javisto) {
      return <p>Assistido ✔</p>;
    }
    return <p className="item">Não assistido</p>;
  }

  return (
    <div className="container text-center">
    <div className="row">
      {listFilmes.map((filme, i) => (
        <div className="col" key={i}>
          <div className="card">
            <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
              <p>Sinopse</p>
              <p className="card-text">{filme.descricao}</p>
              <p>{filme.duracao}</p>
              <p>{filme.genero}</p>
              <p>{filme.nota}</p>
              <Assitido
                  javisto={filme.assistido}
                />
              <a
                href={`/detalhes/${filme.nome}`}
              >
                <div className="btn btn-primary">
                  Detalhes
                </div>
              </a>
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>
  );
}