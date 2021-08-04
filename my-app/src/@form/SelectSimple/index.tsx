import { SelectContainer } from "./styles";
import { SelectOption } from "../types";

interface SelectSimpleProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  invalid?: boolean;
}

function SelectSimple({ options, invalid, ...props }: SelectSimpleProps) {
  return (
    <SelectContainer invalid={invalid}>
      <select {...props}>
        {options?.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}

export default SelectSimple;
