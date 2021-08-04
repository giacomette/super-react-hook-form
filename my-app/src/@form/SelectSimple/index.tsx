import { SelectContainer } from "./styles";
import { SelectOption } from "../types";

interface SelectSimpleProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

function SelectSimple({ options, ...props }: SelectSimpleProps) {
  return (
    <SelectContainer>
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
