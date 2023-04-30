import { useState } from 'react';
import Filmes from './Filmes';

function Catalogo() {
    return (
      <div className="App">
        <h1>Catalogo de Filmes</h1>

        <Filmes />
      </div>
    );
  }
  
  export default Catalogo;