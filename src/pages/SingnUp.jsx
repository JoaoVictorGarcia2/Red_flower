import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

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
      const { error } = await supabase.from('user').insert([{
        username: cadastro.username,
        password: cadastro.password,
      }]);

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
    setCadastro(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form onSubmit={handleSignUp}>
          <h2>Criar conta</h2>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={cadastro.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={cadastro.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Registrar</button>
        </form>
        <p className="switch-text">
          Já tem conta?{' '}
          <button
            type="button"
            className="switch-button"
            onClick={() => navigate('/')}
          >
            Fazer login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;