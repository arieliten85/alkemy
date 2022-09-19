import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistroContext } from "../../../context/RegistroContext";
import CaptureType from "../../../utils/CaptureType";
import useInput from "../../../utils/custom-hooks";

export default function Create() {

  const { registros } = useContext(RegistroContext);

  const navigate = useNavigate();
  const tipo = CaptureType();

  const concepto = useInput();
  const monto = useInput();


  

  const handleCreate = (e) => {
    e.preventDefault();

    if ([concepto.value, monto.value, tipo.value].includes("")) {
      alert("Todos los campos son obligatorios");

      return;
    }

    axios
      .post("http://localhost:4000/api/registros/add", {
        concepto: concepto.value,
        monto: monto.value,
        tipo: tipo.value,
      })
      .then(res => res.data)
      .catch((err) => console.log(err));

      setTimeout(()=>{
        navigate("/");
      },5000)

   
  };


  console.log(tipo.value)

  return (
    <div>
      <h3 className="textCenter">Crear Registro</h3>
      <form onSubmit={handleCreate}>
        <div className="w100">
          <label>Concepto:</label>
          <input type="text" placeholder="Ej.Almacen" {...concepto} />
        </div>

        <div className="w100">
          <label>Monto:</label>
          <input type="text" placeholder="Ej. 1500" {...monto} />
        </div>

        <div className="w100">
          <label>Tipo:</label>

          <select {...tipo}>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
        </div>

        <div className="w100 containerBtn">
          <button className="btn-save">Save</button>

          <Link to={"/"}>
            <div className="btn-back">Back</div>
          </Link>
        </div>
      </form>
    </div>
  );
}
