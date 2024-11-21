import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { supabase } from '../../supabaseClient';
//import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setSuccess('');

  //   const { error } = await supabase.from('user').insert([{ username, password }]);

  //   if (error) {
  //     setError('Erro ao criar conta: Verifique se o username já existe.');
  //     return;
  //   }

  //   setSuccess('Conta criada com sucesso!');
  //   setUsername('');
  //   setPassword('');
  // };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form >
          <h2>Criar conta</h2>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
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
