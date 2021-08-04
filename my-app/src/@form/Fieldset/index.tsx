import { useContext } from "react";
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
}

function Fieldset({ children, title, description }: FieldsetProps) {
  const { primaryColor } = useContext(FormContext);

  return (
    <FieldsetContainer testID={`fieldset-${title}`}>
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
