import React from "react";
import Linha from "./linha";

function Tabela({ lista }) {
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>STATUS</th>
          <th>ID</th>
          <th>NOME</th>
          <th>SALDO</th>
          <th>SALDO</th>
          <th>DATA</th>
        </tr>
      </thead>
      <tbody>
        {lista.map((elemento, index) => {
          return <Linha elemento={elemento} index={index} />;
        })}
      </tbody>
    </table>
  );
}

export default React.memo(Tabela);
