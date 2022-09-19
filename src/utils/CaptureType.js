import { useState } from "react";

export default function CaptureType() {
  const [value, setValue] = useState("");

  const onClick = (e) => {
    setValue(e.target.value);
  };

  return { value, onClick };
}








