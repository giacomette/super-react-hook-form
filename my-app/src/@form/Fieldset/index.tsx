import { useContext } from "react";
import { FormContext } from "../Form";
import {
  FieldsetContainer,
  FieldsetTitle,
  FieldsetDescription,
} from "./styles";

interface FieldsetProps {
  children: any;
  title?: string;
  description?: string;
}

function Fieldset({ children, title, description }: FieldsetProps) {
  const { primaryColor } = useContext(FormContext);

  return (
    <FieldsetContainer>
      {title ? (
        <FieldsetTitle color={primaryColor}>{title}</FieldsetTitle>
      ) : null}

      {description ? (
        <FieldsetDescription color={primaryColor}>
          {description}
        </FieldsetDescription>
      ) : null}

      {children}
    </FieldsetContainer>
  );
}

export default Fieldset;
