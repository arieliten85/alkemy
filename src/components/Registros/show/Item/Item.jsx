import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Item({ itemListReg }) {







  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.delete(`http://localhost:4000/api/registros/delete/${itemListReg._id}`);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
      
    }

  
  };

  // function separator(numb) {
  //   var str = numb.toString().split(".");
  //   str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return str.join(".");
  // }

  return (
    <>
      <tr>
        <td>{itemListReg.concepto}</td>
        <td className="textCenter">{"$" + itemListReg.monto}</td>
        <td className="textCenter">{itemListReg.tipo}</td>

        <td className="containerAcciones">
          <Link to={`update/${itemListReg._id}`}>
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
