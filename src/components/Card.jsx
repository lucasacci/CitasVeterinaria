import React from "react";

export const Card = ({ mascotas, deleteCard }) => {
 

  return (
    <>
      <article className="row">
        {mascotas.map((el, i) => {
          console.log(el);
          return (
            <div className="card cardXD mx-3" key={i}>
              <div className="card-body">
                <h5 className="card-title">Nombre: {el.name}</h5>
                <h6 className="card-subtitle">Dueño: {el.dueño}</h6>
                <p className="card-text">Sintomas: {el.sintomas}</p>
                <p className="card-text">Fecha: {el.fecha}</p>
                <p className="card-text">Hora: {el.hora}</p>
              </div>
              <button
                className="btn btn-danger p-2"
                type="button"
                onClick={() => deleteCard(el)}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};
