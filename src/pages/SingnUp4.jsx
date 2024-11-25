import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import './Login.css'; 
import FLOR from './img/flor.png';
import USER from './img/user.png'

const SignUp = () => {
  const [cadastro, setCadastro] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!cadastro.username || !cadastro.password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const { error } = await supabase.from('user').insert([
        {
          username: cadastro.username,
          password: cadastro.password,
        },
      ]);

      if (error) {
        setError('Erro ao criar conta: Verifique se o username já existe.');
        return;
      }

      setSuccess('Conta criada com sucesso!');
      setCadastro({ username: '', password: '' });
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Erro ao tentar cadastrar a conta:', error);
      setError('Erro inesperado. Tente novamente');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCadastro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='alignment'>
      <div className='main'>
        <div className="login-container">
          <div className="login-card">
            <form onSubmit={handleSignUp}>
              <img src= {USER} alt="" />
              <h2>Seja bem-vindo</h2>
              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}
              <input
                type="text"
                id="username"
                name="username"
                value={cadastro.username}
                placeholder='Username:'
                onChange={handleChange}
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                value={cadastro.password}
                placeholder='Senha:'
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
          onClick={() => navigate('/')}
        >
          Criar conta
        </button>
      </p>
    </div>
  );
};

export default SignUp;
