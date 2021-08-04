import { useContext } from "react";
import { FormContext } from "../Form/context";
import FormButton from "./FormButton";
import { FormButtonContainer } from "./styles";

interface FormButtonsProps {
  disabled?: boolean;
  onOk?: any;
  onCancel?: any;
  okTitle: string;
  cancelTitle?: string;
}

function FormButtons({
  okTitle,
  cancelTitle,
  disabled,
  onCancel,
  onOk,
}: FormButtonsProps) {
  const { primaryColor } = useContext(FormContext);

  return (
    <FormButtonContainer>
      {cancelTitle ? (
        <FormButton
          type="outlined"
          disabled={disabled}
          onClick={onCancel}
          color={primaryColor}
          title={cancelTitle}
        />
      ) : null}

      {okTitle ? (
        <FormButton
          type="contained"
          disabled={disabled}
          onClick={onOk}
          color={primaryColor}
          title={okTitle}
        />
      ) : null}
    </FormButtonContainer>
  );
}

export default FormButtons;
