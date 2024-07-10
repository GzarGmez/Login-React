import { useState } from 'react';
import './App.css';
import Login from './components/Login'; // Importa el componente de login

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para el login

  return (
    <div id="root">
      {isLoggedIn ? (
        <h1>Welcome! You are logged in.</h1>
      ) : (
        <Login onLogin={setIsLoggedIn} /> // Muestra el componente de login si no está logueado
      )}
    </div>
  );
}

export default App;
