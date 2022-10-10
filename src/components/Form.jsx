import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Card } from "./Card";



export const Form = () => {

  const idRandom = uuidv4();

  
  const [name, setName] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState("");

  const datosLs = JSON.parse(localStorage.getItem("mascotas")|| []);

  const [mascotas, setMascotas] = useState(datosLs);


  useEffect(() => {
    
    localStorage.setItem("mascotas", JSON.stringify(mascotas));

  }, [mascotas])
  
  console.log(mascotas);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newMascota = {
      id: idRandom,
      name: name,
      dueño: dueño,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    };

    setMascotas([...mascotas, newMascota]);

    setName('');
    setDueño('');
    setFecha('');
    setHora('');
    setSintomas('');

  }

  const deleteCard = (mascota) =>{

    const nuevoArray = mascotas.filter((x) => x.id !== mascota.id);

    setMascotas(nuevoArray);

  }


  return (
    <>
      <section className="form my-5 container  px-5 pt-5 pb-3">
        <form className="my-3" onSubmit={handleSubmit}>
          <div className="row align-items-center g-3 ">
            <div className="col-12 col-md-6 col-lg-3">
              <label className="col-form-label text-light">
                Nombre de la mascota:
              </label>
            </div>
            <div className="col-12 col-md-6 col-lg-9">
              <input
                type="text"
                className="form-control input"
                placeholder="Nombre de mascota"
                required
                onChange={(e)=> setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="row align-items-center g-3 my-3">
            <div className="col-12 col-md-6 col-lg-3">
              <label className="col-form-label text-light">
                Nombre del dueño:
              </label>
            </div>
            <div className="col-12 col-md-6 col-lg-9">
              <input
                type="text"
                className="form-control input"
                placeholder="Nombre del dueño"
                required
                onChange={(e)=> setDueño(e.target.value)}
                value={dueño}
              />
            </div>
          </div>
          <div className="row align-items-center justify-content-center g-3 my-3">
            <div className="col-12 col-md-2 col-lg-3">
              <label className="col-form-label text-light">Fecha:</label>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <input type="date" className="form-control" required onChange={(e)=> setFecha(e.target.value)} value={fecha} />
            </div>
            <div className="col-12 col-md-2 col-lg-3">
              <label className="col-form-label text-light">Hora:</label>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <input
                type="number"
                className="form-control"
                required
                placeholder="08 - 22"
                onChange={(e)=> setHora(e.target.value)}
                value={hora}
                maxLength={2}
              />
            </div>
          </div>
          <div className="row align-items-center g-3 my-3">
            <div className="col-12 col-md-6 col-lg-3">
              <label className="col-form-label text-light">
                Sintomas:
              </label>
            </div>
            <div className="col-12 col-md-6 col-lg-9">
              <input
                type="text"
                className="form-control input"
                placeholder="Sintomas de su mascota"
                required
                onChange={(e)=> setSintomas(e.target.value)}
                value={sintomas}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            	<button type="submit" className="btn btn-success">Ingresar</button>
          </div>
        </form>
        <hr />
        <Card mascotas={mascotas} deleteCard={deleteCard}/>
      </section>
    </>
  );
};
