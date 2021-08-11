import { FormButtonOutlined, FormButtonContained } from "./styles";

interface ButtonPrimaryProps {
  disabled?: boolean;
  onClick?: any;
  title: string; 
  color: string; 
  variant?: "outlined" | "contained";
}

function ButtonPrimary({
  title, 
  disabled,
  onClick,
  variant = "contained",
  color,
}: ButtonPrimaryProps) {

    return (
        <>
        {variant === "outlined" ? (
          <FormButtonOutlined
            type="button"
            disabled={disabled}
            onClick={onClick}
            color={color}
            >
            {title}
          </FormButtonOutlined>
        ) : null}

        {variant === "contained" ? (
          <FormButtonContained
            disabled={disabled}
            onClick={onClick}
            color={color}
            >
            {title}
          </FormButtonContained>
        ) : null}

        </>
    );
}

export default ButtonPrimary;
