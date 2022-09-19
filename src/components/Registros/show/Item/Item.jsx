import axios from "axios";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Item({ registro }) {

  
  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:4000/api/registros/delete/${registro._id}`)
     
  };

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  return (
    <>
      <tr>
        <td>{registro.concepto}</td>
        <td className="textCenter">{"$" + separator(registro.monto)}</td>
        <td className="textCenter">{registro.tipo}</td>

        <td className="containerAcciones">
          <Link to={`update/${registro._id}`}>
            <button className="btn-edit">Editar</button>
          </Link>

          <button onClick={handleDelete} className="btn-delete">
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}
