import styled from "styled-components";
import { Colors } from "../utils/colors";

export const FieldContainer = styled.div`
  margin-bottom: 4px;
  position: relative;
`;

export const FieldContainerController = styled.div`
  position: relative;
`;

export const FieldLabel = styled.div`
  margin-bottom: 4px;
`;

export const FieldLabelError = styled.div`
  color: ${Colors.Error};
  margin-top: 4px;
  font-size: 12px;
`;

export const MdErrorContainer = styled.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  display: flex;
`;
