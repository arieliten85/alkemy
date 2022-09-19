import React, { useContext } from "react";
import { RegistroContext } from "../../../../context/RegistroContext";
import Item from "../Item/Item";

export default function ItemList() {
  const { registros } = useContext(RegistroContext);


  console.log("SHOW",registros)

  return (
    
      <>

        {registros.map((registro, index) => (
          <Item key={index} registro={registro} />
        ))}
        
      </>
   
  );
}
