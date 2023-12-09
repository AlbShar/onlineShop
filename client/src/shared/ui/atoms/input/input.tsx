import React, {RefObject} from "react";
import TextField from "@mui/material/TextField";

type Input = {
  required: boolean;
  name: "userName" | "email" | "password" ;
  autoComplete?: "userName" | "email" | "password";
  fullWidth?: boolean;
  label: string;
  autoFocus?: boolean;
  margin: "dense" | "normal" | "none";
  type: "text" | "email" | "password";
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value: string;
  inputRef?: RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void)
};

export function FieldInput(props: Input) {
  return <TextField {...props} />;
}
