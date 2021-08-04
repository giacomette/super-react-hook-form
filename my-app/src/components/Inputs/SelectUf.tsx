import { SelectSimple } from "../../@form";

function SelectUf({ ...props }: any) {
  return (
    <SelectSimple
      {...props}
      customProps={{
        options: [
          {
            label: "",
            value: "",
          },
          {
            label: "MT",
            value: "mt",
          },
          {
            label: "SP",
            value: "sp",
          },
        ],
        ...props?.customProps,
      }}
    />
  );
}

export default SelectUf;
