import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBox({
  property = "label",
  label,
  value,
  options,
  width,
  onSelect,
}) {
  return (
    <Autocomplete
      disablePortal
      value={value}
      //   id="combo-box-demo"
      options={options || []}
      sx={{ width: width || "100%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
      getOptionLabel={(option) => option[property]}
      onChange={(e, val) => onSelect(val)}
    />
  );
}
