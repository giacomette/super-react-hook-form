import {
  FormProvider as FormHookProvider,
  UseFormReturn,
} from "react-hook-form";
import FormButtons from "../FormButtons";
import FormLoading from "../FormLoading";
import FormStateProvider from "./context";
import { FormContainer } from "./styles";

interface FormProps {
  methods: UseFormReturn;
  children: any;
  onSubmit: (ev: any) => void;
  isLoading?: boolean;
  primaryColor?: string;
  generateButtons?: {
    okTitle?: string;
    cancelTitle?: string;
    onOk?: any;
    onCancel?: any;
  };
}

function Form({
  children,
  onSubmit,
  generateButtons,
  primaryColor,
  methods,
  isLoading,
}: FormProps) {
  return (
    <FormStateProvider
      values={{
        primaryColor,
      }}
    >
      <FormHookProvider {...methods}>
        <FormContainer>
          {isLoading ? <FormLoading /> : null}

          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {children}

            {generateButtons ? (
              <FormButtons
                onOk={generateButtons.onOk}
                onCancel={generateButtons.onCancel}
                okTitle={generateButtons.okTitle ?? "Salvar"}
                cancelTitle={generateButtons.cancelTitle}
              />
            ) : null}
          </form>
        </FormContainer>
      </FormHookProvider>
    </FormStateProvider>
  );
}

export default Form;
