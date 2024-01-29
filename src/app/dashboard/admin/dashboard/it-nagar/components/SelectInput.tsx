interface Option {
  id: string;
  displayName: string;
}

export interface SelectInputProps {
  id: string;
  options: Array<Option>;
  onValueChange: (optionId: Option["id"]) => void;
  value: string;
}

/**
 * custom reusable select input
 */
const SelectInput = ({
  id,
  options,
  value,
  onValueChange,
}: SelectInputProps) => {
  return (
    <select
      className=" bg-white"
      id={id}
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    >
      {options.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.displayName}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
