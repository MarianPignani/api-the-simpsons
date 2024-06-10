import { useEffect, useState } from 'react';
import './App.css';
import simpsons from './img/simpsons.png';
import Item from './components/Item';


function App() {
  const [personajes, setPersonajes] = useState(null);

  useEffect(()=>{
    getPersonajes()
  },[]);

  const getPersonajes = async () => {
    const response = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes?count=200');
    const data = await response.json();

    const personajesUnicos = data.filter((personaje, index, self) =>
    index === self.findIndex((p) => (
      p.character === personaje.character
    ))
  );

    setPersonajes(personajesUnicos);
  }
  return (
  <div className='fondo'>
    {personajes ? (
      <Item personajes = {personajes} setPersonajes = {setPersonajes} />
    ) : (
      <>
        <img src={simpsons} alt="Los Simpsons" className='simpsons-img' />
        <div className='contenedor-btn'>
          <button className='boton-desbloqueo' onClick={getPersonajes}>Desbloquear personajes</button>
        </div>
      </>
    )}
  </div>
  );
}

export default App