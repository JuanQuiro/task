import React, { useState } from "react";
import { TareasItem } from "./TareasItem";

interface datosItems {
  chagestate:string,
  msj:string
}

const TareasInput = () => {
  const [task, setTask] = useState("Ejemplo de task");
  const [estado, setEstado] = useState("Normal");
  const [estadoItem, setEstadoItem] = useState([["Usa colores para clasificar" , "Importante"]]);

  //className='grid grid-cols-2 border-4 border-sky-900 p-2 rounded-lg m-3 bg-black'

  const enterHandle = (ev?:any) => {
    if(ev?.key === 'Enter')
    {
      if (task===undefined) {
        setTask("En blanco")
      }
      if (estado ===undefined) {
        setEstado('Normal')
      } 
      console.log(`${task}`)
      setEstadoItem((estadoItem) => [[task,estado],...estadoItem,])
    }
  }

  return (
    <>
      <div className="flex mt-7 mb-1 justify-center gap-3 ">
        <button
          className="btn btn-info normal-case"
          onClick={() => {
            setEstado("Informativo");
          }}
        >
          Informativo
        </button>
        <button
          className="btn btn-warning normal-case"
          onClick={() => {
            setEstado("Revisar");
          }}
        >
          Revisar
        </button>
        <button
          className="btn btn-success normal-case"
          onClick={() => {
            setEstado("Realizado");
          }}
        >
          Realizado
        </button>
        <button
          className="btn btn-error normal-case"
          onClick={() => {
            setEstado("Importante");
          }}
        >
          Importante
        </button>
      </div>
      <div className="  bg-green-400 border-black border-2 mx-auto w-11/12 h-96 ">
        <input
          type="text"
          onChange={(ev) => setTask(ev.target.value)}
          placeholder="Tarea"
          onKeyDown={(ev) => enterHandle(ev)}
          className=" placeholder:font-extralight border mx-auto flex mt-3 font-semibold  input input-bordered  w-full max-w-xs"
        />
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
          <h2 className="inline text-ellipsis overflow-hidden ">
            {task.length > 1 ? task : "Ejemplo de task"}
          </h2>
          <div className="flex justify-end">
            <a href="#" onClick={(ev) => {
              alert("Soy un task de ejemplo")
            }} className=" text-red-600 font-bold">
              x
            </a>
          </div>
        </div>
        <div className="scrollbar scrollbar-thumb-red-600  scrollbar-w-1 overflow-y-auto h-60 mt-3 border-dashed border-t-2 border-black">
          {/* <TareasItem estadoItems={estadoItem}/> */
            estadoItem.map((e,i)=> (
            console.log(`El valor es ${e} El inidice es ${i}`),
            <TareasItem key={i} estadoItems={e} />)
            )
          }
        </div>
      </div>
    </>
  );
};

export default TareasInput;
