import styled from "styled-components";

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  button {
    padding: 8px 48px;
    text-align: center;
  }
`;

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
`;
