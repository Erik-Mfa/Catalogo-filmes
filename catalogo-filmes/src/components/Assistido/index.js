import './assistido.css';

function Assistido({ javisto }) {

    if (javisto) {
        return <button className='assistido'>Assistir Novamente</button>;
    }
    return <button className="assistido">Assistir</button>;
  }
  
export default Assistido;