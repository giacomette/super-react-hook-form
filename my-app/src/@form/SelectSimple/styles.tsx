import styled from "styled-components";
import { Colors } from "../utils/colors";
import arrowDownSvg from "./arrow-down.svg";

export const SelectContainer = styled.div<any>`
  select {
    border: 1px solid
      ${(props) => (props.invalid ? Colors.Error : Colors.BorderColor)};
    font-size: 16px;
    border-radius: 6px;
    width: 100%;
    padding: 0 12px;
    height: 40px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: white;
    background-image: url(${arrowDownSvg});
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
  }

  select::-ms-expand {
    display: none;
  }
`;
