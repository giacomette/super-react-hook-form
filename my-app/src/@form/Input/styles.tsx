import styled from "styled-components";
import { Colors } from "../utils/colors";

export const InputContainer = styled.div<{
  invalid?: boolean;
}>`
  input {
    width: 100%;
    padding: 0 12px;
    font-size: 16px;
    border-radius: 6px;
    height: 40px;
    color: ${Colors.InputColor};
    border: 1px solid
      ${({ invalid }) =>
        invalid ? `${Colors.Error} !important` : Colors.BorderColor};
    outline: none;

    &:focus {
      border-color: ${Colors.BorderFocusColor};
    }
  }
`;
