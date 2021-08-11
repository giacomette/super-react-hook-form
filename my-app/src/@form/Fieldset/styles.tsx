import styled from "styled-components";
import { Colors } from "../utils/colors";

export const FieldsetContainer = styled.div<any>`
  margin-bottom: 16px;
  padding: 24px;
  border: 1px solid #d5d7e0;
  border-radius: 6px;
  background-color: #fff;
  position: relative;
`;

export const FieldsetTitle = styled.div<any>`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.color || Colors.InputColor};
`;

export const FieldsetDescription = styled.div<any>`
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${(props) => props.color || Colors.InputColor};
`;
