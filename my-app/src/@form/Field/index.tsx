import { useController, useFormState } from "react-hook-form";

import Input from "../Input";
import extractRules from "../utils/extract-rules";
import IconError from "./IconError";
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
  const rules = extractRules(props);

  const { errors } = useFormState();

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  const AsComponent = as;

  console.log("error", error);
  console.log("invalid", invalid);
  console.log("isTouched", isTouched);
  console.log("isDirty", isDirty);

  return (
    <FieldContainer>
      {label ? <FieldLabel>{label}</FieldLabel> : null}

      <FieldContainerController>
        {AsComponent ? (
          <AsComponent {...(inputProps as any)} {...customProps} />
        ) : (
          <Input invalid={invalid} {...(inputProps as any)} {...customProps} />
        )}

        {invalid ? <IconError /> : null}
      </FieldContainerController>

      {invalid ? <FieldLabelError>{error?.message}</FieldLabelError> : null}
    </FieldContainer>
  );
}

export default Field;
