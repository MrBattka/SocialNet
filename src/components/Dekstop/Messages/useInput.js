import { useState } from "react";

const useInput = (initial, required, placeholder) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    onBlur: e => {
      if (!e.target.value && required) setError("Required field");
      else setError(null);
    },
    placeholder: placeholder,
    onChange: e => setValue(e.target.value),
    error
  };
};

export default useInput