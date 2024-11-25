import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import './Login.css'; 
import FLOR from './img/flor.png';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!loginData.username || !loginData.password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const { data: user, error } = await supabase
        .from('user')
        .select('*')
        .eq('username', loginData.username)
        .single();

      if (error || !user || user.password !== loginData.password) {
        setError('Usuário ou senha incorretos!');
        return;
      }

      alert('Login realizado com sucesso!');
      console.log('Usuário logado:', user);

      navigate('/home');
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      setError('Erro ao tentar fazer login. Tente novamente.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='alignment'>
      <div className='main'>
        <div className="login-container">
          <div className="login-card">
            <form onSubmit={handleLogin}>
              <h2>Seja bem-vindo</h2>
              {error && <p className="error">{error}</p>}

              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                required
              />

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Entrar</button>
            </form>
            
          </div>
          <img className='imagem' src={FLOR} alt="" />
        </div>
      </div>
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
  );
};

export default Login;
