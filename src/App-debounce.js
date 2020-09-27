import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import listaImportada from "./listaCompleta.json";
import Tabela from "./tabela";
import { useDebouncedCallback } from "use-debounce";

function App() {
  const [lista, setLista] = useState([]);
  const [listaCompleta, setListaCompleta] = useState([]);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef("");

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

  const debounced = useDebouncedCallback((value) => {
    const inputValue = inputRef.current.value;
    setInputText(inputValue);
  }, 300);

  const handleInput = (e) => {
    debounced.callback(e.target.value);
  };

  return (
    <div className="container">
      <img
        src="https://cdn.vortx.com.br/images/imgs/ativo-vortx.png"
        className="logoVortx"
        alt="Logo Vórtx"
      />
      <input type="text" ref={inputRef} onChange={handleInput} />
      <Tabela lista={lista} />
    </div>
  );
}

export default App;
