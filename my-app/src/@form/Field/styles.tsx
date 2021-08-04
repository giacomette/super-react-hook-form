import styled from "styled-components";

import { Colors } from "../utils/colors";

export const FieldContainer = styled.div<any>`
  margin-bottom: 32px;
  position: relative;
`;

export const FieldContainerController = styled.div<any>`
  position: relative;
`;

export const FieldLabel = styled.div<any>`
  margin-bottom: 8px;
  color: ${Colors.LabelColor};
  font-size: 12px;
  font-weight: 600;
`;

export const FieldLabelError = styled.div<any>`
  color: ${Colors.Error};
  margin-top: 2px;
  font-size: 12px;
`;