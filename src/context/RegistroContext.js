import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const RegistroContext = createContext();

const RegistroContextProvider = ({ children }) => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/registros")
      .then((resp) => {
        setRegistros(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);

 

  return (
    <RegistroContext.Provider
      value={{
        registros,
        setRegistros,
      }}
    >
      {children}
    </RegistroContext.Provider>
  );
};

export default RegistroContextProvider;
