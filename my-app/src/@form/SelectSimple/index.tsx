function SelectSimple({ options, ...rest }: any) {
  return (
    <select {...rest}>
      {options.map((value: any) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SelectSimple;
