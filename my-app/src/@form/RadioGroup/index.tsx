import { Radio, RadioGroup as RadioGroupChakra, Stack } from "@chakra-ui/react";
import { SelectOption } from "../types";
import { Colors } from "../utils/colors";

interface RadioGroupProps {
  value: string;
  onChange: (v: any) => void;
  options: SelectOption[];
  invalid?: boolean;
}

function RadioGroup({ value, onChange, options, invalid }: RadioGroupProps) {
  return (
    <>
      <RadioGroupChakra onChange={onChange} value={value}>
        <Stack direction="row">
          {options.map((item, index) => (
            <Radio
              color={invalid ? Colors.Error : undefined}
              isInvalid={invalid}
              value={item.value}
              key={item.value}
            >
              {item.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroupChakra>
    </>
  );
}

export default RadioGroup;
