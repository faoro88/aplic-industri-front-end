import React from 'react';
import { useState } from 'react';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './index.css';


function Index() {
  
  const [userInputed, setUserInputed] = useState(false)
  const [passwordInputed, setPasswordInputed] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h1> Login Page </h1>
        <TextField id="filled-basic" label="Usuário" variant="filled" onChange={() => setUserInputed(true)} />
        <TextField id="filled-basic" label="Senha" variant="filled" type="password" onChange={() => setPasswordInputed(true)} />
        <Button variant="outlined" disabled={userInputed && passwordInputed? false : true}>
          Entrar
        </Button>
      </header>
    </div>
  );
}

export default Index;
