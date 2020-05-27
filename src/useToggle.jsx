import { useState } from "react";

export default function useToggle(defaultValue) {
  const [toggle, setToggle] = useState(defaultValue);

  const Toggler = () => {
    setToggle((prevState) => !prevState);
  };
  return [toggle, Toggler];
}
