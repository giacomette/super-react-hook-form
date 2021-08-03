import { FormProvider, UseFormReturn } from "react-hook-form";

interface FormProps {
  methods: UseFormReturn;
  children: any;
  onSubmit: (ev: any) => void;
}

function Form({ children, onSubmit, methods }: FormProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default Form;
