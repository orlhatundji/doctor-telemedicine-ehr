import React from "react";
import Select from "react-select";

type DropdownProps = {
  selected: { value: string; label: string } | null;
  setSelected: (selected: { value: string; label: string } | null) => void;
  options: { value: string; label: string }[];
};

const Dropdown: React.FC<DropdownProps> = ({
  selected,
  setSelected,
  options,
}) => {
  return (
    <div className="App">
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#E0E0E0",
            padding: 8,
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,

          colors: {
            ...theme.colors,
            primary: "#E0E0E0",
            primary25: "#FA580514",
            primary50: "#FA580514",
            primary75: "#FA580514",
            neutral20: "#111111",
            neutral60: "#111111",
            neutral50: "#FA5805",
            neutral80: "#FA5805",
            neutral90: "#FA5805",
          },
        })}
        defaultValue={selected}
        onChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
