import React, { useState } from 'react';
import './Estilos/tareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  const [input, setInput] = useState('');

  const manejarCambio = (elemento) => {
    setInput(elemento.target.value);
  };

  const manejarEnvio = (elemento) => {
    elemento.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva);
    setInput(''); // Limpiar el campo de entrada después de enviar
  };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        value={input}
        onChange={manejarCambio}
      />
      <button className='tarea-boton' type='submit'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;