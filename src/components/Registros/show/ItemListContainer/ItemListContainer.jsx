import React from "react";
import { Link } from "react-router-dom";
import SumaTotal from "../../total/SumaTotal";

import ItemList from "../ItemList/ItemList";

export default function ItemContainerList() {
  return (
    <div className="container">
      <div className="box">
        <div className="create">
          <Link to="/create">
            <h2 className="">Create</h2>
          </Link>
        </div>
        <table cellspacing="0">
          <thead>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th>Accion</th>
          </thead>
          <tbody>
            <ItemList />
          </tbody>
        </table>

        <div className="textCenter total">
        <SumaTotal />
        </div>

      
      </div>
    </div>
  );
}
