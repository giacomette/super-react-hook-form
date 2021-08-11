import styled from "styled-components";

export const FormButtonOutlined = styled.button<any>`
  height: 40px;
`;

export const FormButtonContained = styled.button<any>`
  height: 40px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  width: 100%;
`;
