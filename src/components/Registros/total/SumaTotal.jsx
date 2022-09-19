import React, { useContext } from "react";
import { RegistroContext } from "../../../context/RegistroContext";

export default function SumaTotal() {
  const { listReg } = useContext(RegistroContext);

  let ingresos = 0;
  let egresos = 0;
  let total = 0;

  listReg.forEach((item) => {
    Object.values(item).forEach((valor) => {
      if (valor === "ingreso") {
        ingresos += Number(item.monto);

        return (total += ingresos);
      }

      if (valor === "egreso") {
        egresos += Number(item.monto);

        return (total -= egresos);
      }
    });
  });

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  return <div>Total ${separator(total)}</div>;
}
