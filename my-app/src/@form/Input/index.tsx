import { InputContainer } from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

function Input({ invalid, ...rest }: InputProps) {
  return (
    <InputContainer invalid={!!invalid}>
      <input {...rest} />
    </InputContainer>
  );
}

export default Input;
