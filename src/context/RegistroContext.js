import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const RegistroContext = createContext();

const RegistroContextProvider = ({ children }) => {
  const [listReg, setLisReg] = useState([]);



  return (
    <RegistroContext.Provider
      value={{
        listReg,
        setLisReg,
      }}
    >
      {children}
    </RegistroContext.Provider>
  );
};

export default RegistroContextProvider;
