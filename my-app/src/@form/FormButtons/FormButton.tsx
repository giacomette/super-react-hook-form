import { FormButtonContained, FormButtonOutlined } from "./styles";

interface FormButtonProps {
  title: string;
  type: "outlined" | "contained";
  disabled?: boolean;
  onClick?: any;
  color?: string | null;
}

function FormButton({
  title,
  type,
  disabled,
  onClick,
  color,
}: FormButtonProps) {
  return (
    <>
      {type === "outlined" ? (
        <FormButtonOutlined
          type="button"
          disabled={disabled}
          onClick={onClick}
          color={color}
        >
          {title}
        </FormButtonOutlined>
      ) : null}

      {type === "contained" ? (
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

export default FormButton;
