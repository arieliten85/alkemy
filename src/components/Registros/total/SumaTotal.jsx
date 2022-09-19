import React, { useContext } from "react";
import { RegistroContext } from "../../../context/RegistroContext";

export default function SumaTotal() {
  const { listReg } = useContext(RegistroContext);

  let ingresos = 0;
  let egresos = 0;
  let total = 0;

  listReg.forEach((item) => {
    Object.values(item).forEach((item2) => {
      if (item2 === "ingreso") {
        ingresos += Number(item.monto);
      }

      if (item2 === "egreso") {
        egresos += Number(item.monto);
      }
    });

    return (total = ingresos - egresos);
  });

  console.log(total);



  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  return <div>Total ${separator(total)}</div>;
}
