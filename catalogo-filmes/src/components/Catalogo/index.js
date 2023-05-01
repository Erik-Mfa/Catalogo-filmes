import Filmes from '../Filmes/index';
import './catalogo.css';

function Catalogo() {
    return (
      <div >
        <h1 className="mb-4 mt-4">Catalogo de Filmes</h1>

        <input placeholder="Pesquisar Filme"></input>

        <select name="select">
          <option value="valor1">Título</option>
          <option value="valor2" selected>Ano</option>
          <option value="valor3">Nota</option>
        </select>

        <Filmes />
      </div>
    );
  }
  
  export default Catalogo;