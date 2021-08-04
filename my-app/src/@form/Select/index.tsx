import ReactSelect, { Props } from "react-select";
import { Colors } from "../utils/colors";

function Select({ options, ...props }: Props) {
  return (
    <ReactSelect
      placeholder=""
      styles={{
        control: () => ({
          border: `1px solid ${Colors.BorderColor}`,
          borderRadius: 6,
          flexDirection: "row",
          display: "flex",
        }),
        input: () => ({
          height: 36,
          fontSize: 14,
        }),
        placeholder: () => ({
          fontSize: 14,
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
      }}
      {...props}
      options={options ?? []}
    />
  );
}

export default Select;
