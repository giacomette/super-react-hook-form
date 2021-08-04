import { useContext } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FormContext } from "../Form/context";
import { WrapperContainer } from "./styles";

function FormLoading() {
  const { primaryColor } = useContext(FormContext);

  return (
    <WrapperContainer>
      <Loader type="TailSpin" color={primaryColor || undefined} />
    </WrapperContainer>
  );
}

export default FormLoading;
