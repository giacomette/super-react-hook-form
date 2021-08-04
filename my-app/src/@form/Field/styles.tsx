import styled from "styled-components";

import { Colors } from "../utils/colors";

export const FieldContainer = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

export const FieldContainerController = styled.div`
  position: relative;
`;

export const FieldLabel = styled.div`
  margin-bottom: 8px;
  color: ${Colors.LabelColor};
  font-size: 12px;
  font-weight: 600;
`;

export const FieldLabelError = styled.div`
  color: ${Colors.Error};
  margin-top: 2px;
  font-size: 12px;
`;