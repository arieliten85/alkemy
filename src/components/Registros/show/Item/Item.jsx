import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Item({ itemListReg }) {


  const handleDelete = async (id) => {

    try {
      const response = await axios.delete(
        `http://localhost:4000/api/registros/delete/${id}`
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    window.location.replace('');
  };

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  return (
    <>
      <tr>
        <td>{itemListReg.concepto}</td>
        <td className="textCenter">{"$" + separator(itemListReg.monto) }</td>
        <td className="textCenter">{itemListReg.tipo}</td>

        <td className="containerAcciones">
          <Link to={`update/${itemListReg._id}`}>
            <button className="btn-edit">Editar</button>
          </Link>

          <button onClick={() => handleDelete(itemListReg._id)} className="btn-delete">
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}
