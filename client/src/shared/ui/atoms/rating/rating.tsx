import { useState } from "react";
import MuiRating from "@mui/material/Rating";

export const Rating = () => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <MuiRating
      name="controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
