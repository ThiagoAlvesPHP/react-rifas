// LIBs
import React, { useContext, useEffect, useState } from 'react';
import validator from 'validator';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// UTILs
import * as Cookie from '../../core/utils/Cookie';

// CONTEXT
import { Context } from '../../core/contexts';

// STYLE
import './style.scss';

export function LoginView() {
  const baseURL = "http://localhost:8000/api/";

  const [email, setEmail] = useState('thiagoalves@ltdeveloper.com.br');
  const [password, setPassword] = useState('12345678');
  const [validEmail, setValidEmail] = useState();
  const [validPassword, setValidPassword] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (Cookie.get('token')) { 
      navigate("../home");
    }
  }); 

  function login() {
    if (validator.isEmail(email)) {
      setValidEmail('');
      if (password.length > 7) {
        setValidPassword('');
        
        axios.post(`${baseURL}auth`, {email:email, password:password})
        .then(function (response) {
          if (!response.data.error) {
            let options = {
              session: true
            };
            Cookie.set('token', response.data.token, options);
            setTimeout(() => {
              navigate("../home", { replace: true });
            }, 1000); 
          } else {
            setValidPassword(response.data.error);
          }
        });
      } else {
        setValidPassword('Senha Invalida, minimo de 8 digitos');
      }
    } else {
      setValidEmail('E-mail Invalido');
    }
  }

  return (
    <div className='login'>
      <div className='form-login'>
        <div className='form'>
          <label>E-mail:</label>
          <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} id="email" name="email" required className='input'/>
          {validEmail && <div className='error'>{validEmail}</div>}
          <label>Senha:</label>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} id="password" name="password" required className='input'/>
          {validPassword && <div className='error'>{validPassword}</div>}
          <button onClick={login} className='btn'>Logar</button>
        </div>
      </div>
    </div>
  )
}