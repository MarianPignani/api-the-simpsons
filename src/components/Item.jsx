import { useState } from 'react';
import simpsons from '../img/simpsons.png';

const Item = (props) => {
  const {personajes, setPersonajes} = props;
  const back = () => {
    setPersonajes(null);
  }

  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }

  return (
    <div className='contenedor-item'>
        <img src={simpsons} alt="Los Simpsons" className='simpsons-img2' />
        <div className="contenedor-btn">
          <button className="btnInicio" onClick={back}>Volver al inicio</button>
        </div>
        <div>
          {personajes.map((personaje, index) => {
            return (
            <div className="tarjeta" key={index}>
              <h3 className="nombre">{personaje.character}</h3>
              <img className="imgPersonaje" src={personaje.image} alt={personaje.character} />
              <p><button className='btn-frase' onClick={handleShow}>{show === false ? "Ver frase" : "Ocultar frase"}</button> </p>
              {show === true && <p className="frase">"{personaje.quote}"</p>}
            </div>
          )})}
        </div>
    </div>
  );
}

export default Item;