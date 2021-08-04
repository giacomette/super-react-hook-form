import { useController } from "react-hook-form";

import Input from "../Input";
import extractRules from "../utils/extract-rules";
import {
  FieldContainer,
  FieldLabel,
  FieldLabelError,
  FieldContainerController,
} from "./styles";

interface FieldProps<T = any>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  control?: any;
  customProps?: T;
  defaultValue?: any;
  as?: any;
}

function Field({
  name,
  as,
  label,
  control,
  defaultValue,
  customProps,
  ...props
}: FieldProps) {
  const rules = extractRules({ label, name, ...props });

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  const AsComponent = as;

  return (
    <FieldContainer>
      {label ? <FieldLabel>{label}</FieldLabel> : null}

      <FieldContainerController>
        {AsComponent ? (
          <AsComponent {...(inputProps as any)} {...customProps} />
        ) : (
          <Input invalid={invalid} {...(inputProps as any)} {...customProps} />
        )}
      </FieldContainerController>

      {invalid ? <FieldLabelError>{error?.message}</FieldLabelError> : null}
    </FieldContainer>
  );
}

export default Field;
