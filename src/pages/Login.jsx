import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
//import { supabase } from '../../supabaseClient';
//import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError('');

  //   const { data: user, error } = await supabase
  //     .from('user')
  //     .select('*')
  //     .eq('username', username)
  //     .single();

  //   if (error || !user || user.password !== password) {
  //     setError('Usuário ou senha incorretos!');
  //     return;
  //   }

  //   alert('Login realizado com sucesso!');
  //   console.log('Usuário logado:', user);

  // };

  return (
    <div className="login-container">
      <div className="login-card">
        <form>
          <h2>Seja bem-vindo</h2>
          {error && <p className="error">{error}</p>}
          <label>Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <p className="switch-text">
          Não tem conta?{' '}
          <button
            type="button"
            className="switch-button"
            onClick={() => navigate('/signup')}
          >
            Criar conta
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
