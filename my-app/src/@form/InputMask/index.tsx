import InputMaskComponent, { Props } from "react-input-mask";
import { InputMaskContainer } from "./styles";

function InputMask(props: Props) {
  return (
    <InputMaskContainer>
      <InputMaskComponent {...props} />
    </InputMaskContainer>
  );
}

export default InputMask;
