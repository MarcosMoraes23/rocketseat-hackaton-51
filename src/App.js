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
  // const profissoes = ["Dentista", "Médico", "Advogado"];

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("viado");
  }

  return (
    <div className="main-container">
      <Container>
        <Title>
          Qual seu nome?
        </Title>
        <InputText value={nome} onChange={(event) => setNome(event.target.value)} />
        <Title>
          Qual sua idade?
        </Title>
        <InputText value={idade} onChange={(event) => setIdade(event.target.value)} />
        <Title>
          Qual sua escolaridade?
        </Title>
        <InputText value={escolaridade} onChange={(event) => setEscolaridade(event.target.value)} />
        
        <ButtonNext type="submit" onClick={(event) => handleSubmit(event)}>
          >
        </ButtonNext>
      </Container>
    </div>
  );
}

export default App;
