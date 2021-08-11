import { useContext } from "react";
import ButtonPrimary from "../ButtonPrimary";
import { FormContext } from "../Form/context";
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
        <ButtonPrimary
          variant="outlined"
          disabled={disabled}
          onClick={onCancel}
          color={primaryColor as string}
          title={cancelTitle}
        />
      ) : null}

      {okTitle ? (
        <ButtonPrimary
          variant="contained"
          disabled={disabled}
          onClick={onOk}
          color={primaryColor as string}
          title={okTitle}
        />
      ) : null}
    </FormButtonContainer>
  );
}

export default FormButtons;
