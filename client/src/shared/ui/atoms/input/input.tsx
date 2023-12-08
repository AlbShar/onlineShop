import React, {RefObject} from "react";
import TextField from "@mui/material/TextField";

type Input = {
  required: boolean;
  name: "username" | "email" | "password" | "First Name" | "Last Name";
  autoComplete?: "username" | "email" | "password";
  fullWidth?: boolean;
  label: string;
  autoFocus?: boolean;
  margin: "dense" | "normal" | "none";
  type: "text" | "email" | "password";
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value?: any;
  inputRef?: RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void)
};

export function FieldInput(props: Input) {
  return <TextField {...props} />;
}
