import React, { useState } from 'react';
import { Title } from './components/Title/TitleStyle';
import { Container } from './components/Container/ContainerStyle';
import { InputText } from './components/InputText/InputTextStyle';
import { ButtonNext } from './components/ButtonNext/ButtonNextStyle';
import './App.css';

function App() {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [profissao, setProfissao] = useState("");

  return (
    <div className="main-container">
      <Container>
        <Title>
          Qual seu nome?
        </Title>
        <InputText value={nome} onChange={(event) => setNome(event.target.value)}/>
        <ButtonNext>
          >
        </ButtonNext>
      </Container>
    </div>
  );
}

export default App;
