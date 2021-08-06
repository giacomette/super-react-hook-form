import { useController } from "react-hook-form";

import Input from "../Input";
import extractRules from "../utils/extract-rules";
import {
  FieldContainer,
  FieldLabel,
  FieldLabelError,
  FieldContainerController,
} from "./styles";

interface FieldProps {
  label?: string;
  name: string;
  control?: any;
  customProps?: any;
  defaultValue?: any;
  customError?: string;
  disabledShowError?: boolean;
  as?: any;
}

function Field({
  name,
  as,
  label,
  control,
  defaultValue,
  customProps,
  customError,
  disabledShowError,
  ...props
}: FieldProps & any) {
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

  const isInvalid = !!customError || invalid;

  return (
    <FieldContainer>
      {label ? (
        <FieldLabel testID={`label-field-${name}`}>{label}</FieldLabel>
      ) : null}

      <FieldContainerController>
        {AsComponent ? (
          <AsComponent
            invalid={isInvalid}
            {...(inputProps as any)}
            {...customProps}
          />
        ) : (
          <Input
            invalid={isInvalid}
            {...(inputProps as any)}
            {...customProps}
          />
        )}
      </FieldContainerController>

      {isInvalid && !disabledShowError ? (
        <FieldLabelError testID={`label-field-${name}-error`}>
          {customError || error?.message}
        </FieldLabelError>
      ) : null}
    </FieldContainer>
  );
}

export default Field;
