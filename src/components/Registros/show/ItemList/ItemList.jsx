import axios from "axios";
import React, { useContext, useEffect } from "react";
import { RegistroContext } from "../../../../context/RegistroContext";
import Item from "../Item/Item";

export default function ItemList() {
  const { listReg, setLisReg } = useContext(RegistroContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "http://localhost:4000/api/registros",
        });

        setLisReg(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setLisReg]);

  

  return (
    <>
      {listReg.map((itemListReg, index) => (
        <Item key={index} itemListReg={itemListReg} />
      ))}
    </>
  );
}
