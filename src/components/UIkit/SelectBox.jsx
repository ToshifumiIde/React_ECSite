import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SelectBox = (props) => {
  return (
    <FormControl>
      <InputLabel>{props.label}</InputLabel>
      {/* カテゴリの選択肢 */}
      <Select
        required={props.required}
        value={props.value}
        onCHange={(e) => {
          props.select(e.target.value);
        }}
      >
        {props.options.map((option) => (
          <MenuItem key={props.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
