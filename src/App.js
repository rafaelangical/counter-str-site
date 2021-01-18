import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
`;

const TextHelp = styled.p`
  margin-bottom: 10px;
`;

const TextInput = styled.textarea`
  min-height: 200px;
  height: fit-content;
  max-height: auto;
  width: 100%;
  max-width: 500px;
  padding: 10px;

  @media (max-width: 800px) {
    max-width: 80%;
  }
`;

const TextStrNumber = styled.h3`
  color: blue;
  strong {
    font-size: 2rem;
    color: red;
  }
`;

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

function App() {
  const [str, setStr] = useState('');

  return (
    <div className="App">
      <Title>Contador de caractéres</Title>
      <img src={logo} className="App-logo" alt="logo" />

      <TextHelp>
        Digita o texto ai jovem que vou te passar a quantidade de caracteres
      </TextHelp>
      <TextInput
        type="text"
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />
      <TextStrNumber>
        Na frase dentro do campo acima temos: <strong>{str.length}</strong>{' '}
        caracteres
      </TextStrNumber>
      <Footer>
        Created with ❤ by{' '}
        <a href="https://github.com/rafaelangical" target="_blank">
          Rafael Souza
        </a>
        follow me
      </Footer>
    </div>
  );
}

export default App;
