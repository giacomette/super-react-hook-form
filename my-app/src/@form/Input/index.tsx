import { InputContainer } from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  testID?: string;
}

function Input({ invalid, testID, ...rest }: InputProps) {
  return (
    <InputContainer invalid={!!invalid}>
      <input data-testid={testID} {...rest} />
    </InputContainer>
  );
}

export default Input;
