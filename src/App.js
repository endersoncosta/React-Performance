import React, { useState, useEffect } from "react";
import "./Style.css";
import listaImportada from "./listaCompleta.json";
import Tabela from "./tabela";

function App() {
  const [lista, setLista] = useState([]);
  const [listaCompleta, setListaCompleta] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleList() {
    let list = [];
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);

    setListaCompleta(list);
  }

  useEffect(() => {
    handleList();
  }, [inputText]);

  useEffect(() => {
    setLista(
      listaCompleta.filter(
        (element) =>
          element.name.toUpperCase().search(inputText.toUpperCase()) !== -1
      )
    );
  }, [inputText, listaCompleta]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container">
      <img
        src="https://cdn.vortx.com.br/images/imgs/ativo-vortx.png"
        className="logoVortx"
        alt="Logo Vórtx"
      />
      <input type="text" value={inputText} onChange={handleInput} />
      <Tabela lista={lista} />
    </div>
  );
}

export default App;
