import React from "react";

function Linha({ elemento, index }) {
  const formatarData = (index) => {
    let data = new Date();
    data.setDate(data.getDate() + index);
    const dataCerta = data.toLocaleString("pt-BR", {
      timeZone: "UTC",
      dateStyle: "short",
    });
    return dataCerta;
  };

  return (
    <tr key={index}>
      <td>
        {elemento.isActive ? (
          <div className="bolinha verde"></div>
        ) : (
          <div className="bolinha vermelha"></div>
        )}
      </td>
      <td>{index}</td>
      <td>{elemento.name}</td>
      <td>{elemento.balance}</td>
      <td>{elemento.balance}</td>
      <td>{formatarData(index)}</td>
    </tr>
  );
}

export default React.memo(Linha);
