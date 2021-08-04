import InputMaskComponent, { Props } from "react-input-mask";
import { InputMaskContainer } from "./styles";
interface InputMaskProps extends Props {
  invalid?: boolean;
}

function InputMask({invalid, ...props}: InputMaskProps) {
  return (
    <InputMaskContainer invalid={invalid}>
      <InputMaskComponent {...props} />
    </InputMaskContainer>
  );
}

export default InputMask;
