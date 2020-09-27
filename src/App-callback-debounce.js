import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Style.css";
import listaImportada from "./listaCompleta.json";
import Tabela from "./tabela";
import { useDebouncedCallback } from "use-debounce";

function App() {
  const [lista, setLista] = useState([]);
  const [listaCompleta, setListaCompleta] = useState([]);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef("");

  const handleList = useCallback(()=>{
    let list = [];
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);
    list = list.concat(listaImportada);

    setListaCompleta(list);
  },[])

  useEffect(() => {
    handleList();
  }, [handleList]);

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

  const handleInput = useCallback((e) => {
    debounced.callback(e.target.value);
  },[debounced]);

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
