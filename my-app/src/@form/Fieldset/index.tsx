import { useContext } from "react";
import FormLoading from "../FormLoading";

import { FormContext } from "../Form/context";
import {
  FieldsetContainer,
  FieldsetTitle,
  FieldsetDescription,
} from "./styles";

interface FieldsetProps {
  children: any;
  title?: string;
  description?: string;
  isLoading?: boolean;
}

function Fieldset({ children, title, description, isLoading }: FieldsetProps) {
  const { primaryColor } = useContext(FormContext);

  return (
    <FieldsetContainer testID={`fieldset-${title}`}>

      {isLoading ? <FormLoading /> : null}

      {title ? (
        <FieldsetTitle testID={`fieldset-${title}-title`} color={primaryColor}>
          {title}
        </FieldsetTitle>
      ) : null}

      {description ? (
        <FieldsetDescription
          testID={`fieldset-${title}-description`}
          color={primaryColor}
        >
          {description}
        </FieldsetDescription>
      ) : null}

      {children}
    </FieldsetContainer>
  );
}

export default Fieldset;
