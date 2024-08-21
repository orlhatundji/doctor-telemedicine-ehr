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
            color: "#111111",
            fontSize: 14,
            padding: 8,
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            primary: "#111111",
            primary75: "#111111",
            primary50: "#111111",
            primary25: "#111111",
            danger: "#111111",
            dangerLight: "#111111",
            neutral0: "#FFFFFF",
            neutral5: "#111111",
            neutral10: "#111111",
            neutral20: "#111111",
            neutral30: "#111111",
            neutral40: "#111111",
            neutral50: "#111111",
            neutral60: "#111111",
            neutral70: "#111111",
            neutral80: "#111111",
            neutral90: "#111111",
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
