import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RegistroContext } from "../../../../context/RegistroContext";
import CaptureType from "../../../../utils/CaptureType";
import useInput from "../../../../utils/custom-hooks";

export default function EditContainer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const concepto = useInput();
  const monto = useInput();
  const tipo = CaptureType();

  const { registros } = useContext(RegistroContext);

  const itemUpdate = registros.filter((item) => item._id === id);


  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/registros/update/${id}`, {
        concepto: concepto.value ? concepto.value : itemUpdate.concepto,
        monto: monto.value ? monto.value : itemUpdate.monto,
        tipo: tipo.value ? tipo.value : itemUpdate.tipo,
      })
      .then(

        navigate("/")
      )
      .catch((err) => console.log(err));

   

    
  };

  return (
    <div className="editContainer">
      <h3 className="textCenter">Editar Registro</h3>
      <form onSubmit={handleUpdate}>
        <div className="w100">
          <label>Concepto:</label>
          <input
            type="text"
            placeholder={itemUpdate[0].concepto}
            {...concepto}
          />
        </div>

        <div className="w100">
          <label>Monto:</label>
          <input type="text" placeholder={itemUpdate[0].monto} {...monto} />
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
