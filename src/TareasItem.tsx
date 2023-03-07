import React from "react";

export let TareasItem = ({estadoItems}) => {
  const task = estadoItems[0];
  const estado = estadoItems[1];

  const eliminarItem = (e) => {
    const NombreDeTask = e.target.parentElement.parentElement.querySelector("h2").textContent;
    alert(`No, no vas poder eliminar ${NombreDeTask}`)
  }

  return (
      <div
        className={`${
          estado === "Normal"
            ? "normal"
            : estado === "Informativo"
            ? "informativo"
            : estado === "Revisar"
            ? "revisar"
            : estado === "Importante"
            ? "importante"
            : estado === "Realizado"
            ? "realizado"
            : "normal"
        }`}
      >
        <h2 className="inline text-ellipsis overflow-hidden ">{task}</h2>
        <div className="flex justify-end">
          <a href="#" onClick={(e) => eliminarItem(e)} className=" text-red-600 font-bold">
            x
          </a>
        </div>
      </div>
  );
};
