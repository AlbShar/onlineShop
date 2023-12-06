import { FC } from "react";
import MuiButton from "@mui/material/Button";

type Button = {
  children: string;
};

export const Button: FC<Button> = ({ children }) => {
  return (
    <MuiButton
      variant="outlined"
      sx={{ bgcolor: "ochre.dark"}}
    >
      {children}
    </MuiButton>
  );
};
