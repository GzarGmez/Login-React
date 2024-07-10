import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/img/imagen.png';




const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica de autenticación
    if (username === 'admin' && password === 'admin') {
      onLogin(true);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <img src={Logo}/>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
