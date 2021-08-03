import { MdError } from "react-icons/md";

import { Colors } from "../utils/colors";
import { MdErrorContainer } from "./styles";

function IconError() {
  return (
    <MdErrorContainer>
      <MdError color={Colors.Error} />
    </MdErrorContainer>
  );
}

export default IconError;
