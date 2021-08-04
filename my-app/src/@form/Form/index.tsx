import { useEffect } from "react";
import { createContext, useState } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface FormProps {
  methods: UseFormReturn;
  children: any;
  onSubmit: (ev: any) => void;
  primaryColor?: string;
}

export const FormContext = createContext({
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

function Form({ children, onSubmit, primaryColor, methods }: FormProps) {
  return (
    <FormStateProvider
      values={{
        primaryColor,
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </FormStateProvider>
  );
}

export default Form;
