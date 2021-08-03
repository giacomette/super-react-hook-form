import ReactSelect, { Props } from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Select(props: Props) {
  return <ReactSelect options={options} {...props} />;
}

export default Select;
