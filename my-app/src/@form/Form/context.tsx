import { useEffect } from "react";
import { createContext, useState } from "react";

export const FormContext = createContext<{
  primaryColor: string | null
}>({
  primaryColor: null,
});

function FormStateProvider({ children, values }: any) {
  const [options, setOptions] = useState<any>({});

  useEffect(() => {
    setOptions(values);
  }, [values]);

  return (
    <FormContext.Provider value={options}>{children}</FormContext.Provider>
  );
}

export default FormStateProvider;
