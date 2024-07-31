import './App.css';
import logo from './Form/IMG/logo.png'
import ListaTareas from './Form/ListaTareas.js';
function App() {
  return (
      <div className='aplicacion-tareas'>
          <div className='logo-contenedor'>
           <img
            src={logo}
            className='logo-epn'
            alt="logo"
            />
          </div>
      <div className='lista-tareas'>
        <h1>Lista de Tareas</h1>
        <ListaTareas />
      </div>
    </div>
);
}
export default App;
