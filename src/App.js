import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [cep, setCep] = useState('12256-464');
  const [resposta, setResposta] = useState('');
  const url = `https://viacep.com.br/ws/${cep}/json`;

  function enviar() {
    fetch(url)
      .then((r) => r.text())
      .then((r) => {
        console.log(r);
        setResposta(r);
      });
  }

  return (
    <div>
      <div>
        <label>CEP</label>
        <input value={cep} onChange={(e) => setCep(e.target.value)} />
        <button onClick={enviar}> Obter</button>
      </div>

      {resposta !== '' && <A resposta={resposta} />}
    </div>
  );
}

function A(props) {
  return <div>olá {props.resposta.logradouro} </div>;
}
