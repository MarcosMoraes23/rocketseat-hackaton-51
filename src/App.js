import React, { useState } from 'react';
import { Title } from './components/Title/TitleStyle';
import { Container } from './components/Container/ContainerStyle';
import { InputText } from './components/InputText/InputTextStyle';
import { ButtonNext } from './components/ButtonNext/ButtonNextStyle';
import './App.css';

function App() {

  const [form, setForm] = useState({nome: '', idade: '', escolaridade: ''});
  const [numeroPergunta, setNumeroPergunta] = useState(0);
  const questoes = ["Qual seu Nome?", "Qual sua Idade?", "Qual sua Escolaridade?"];


  const handleChange = field => (event) => {
    setForm({
      ...form,
      [field]: event.target.value
    });
  }

  const getInputQuestao = () => {
    return (
      <>
        <Title>
          {questoes[numeroPergunta]}
        </Title>
        <InputText value={Object.keys(form)[numeroPergunta].value} onChange={(event) => handleChange(Object.keys(form)[numeroPergunta])(event)} />
      </>
    );
  }

  return (
    <div className="main-container">
      <Container>
        {getInputQuestao()}
        <ButtonNext type="submit" onClick={() => setNumeroPergunta(numeroPergunta + 1)}>
          >
        </ButtonNext>
        {form.nome}
        <br/>
        {form.idade}
        <br/>
        {form.escolaridade}
      </Container>
    </div>
  );
}

export default App;
