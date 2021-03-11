import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formControl: {
    marginBottom: 16,
    minWidth: 128,
    width: "100%",
  },
});

const SelectBox = (props) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{props.label}</InputLabel>
      {/* カテゴリの選択肢 */}
      <Select
        required={props.required}
        value={props.value}
        onChange={(e) => {
          props.select(e.target.value);
        }}
      >
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;