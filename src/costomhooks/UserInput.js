import { useState } from "react";

const UserInput = () => {
  const [value, setvalue] = useState("");

  return [
    {
      value,
      onChange: (e) => setvalue(e.target.value),
    },
    () => setvalue(""),
  ];
};

export default UserInput;
