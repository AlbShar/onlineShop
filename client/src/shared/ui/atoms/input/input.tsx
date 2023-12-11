import React, {RefObject} from "react";
import TextField from "@mui/material/TextField";

import { FieldsInput } from "~/shared/api/auth/";

// type Input = {
//   required: boolean;
//   name: "username" | "email" | "password" ;
//   autoComplete: "username" | "email" | "password";
//   fullWidth?: boolean;
//   label: string;
//   autoFocus?: boolean;
//   margin: "dense" | "normal" | "none";
//   type: "text" | "email" | "password";
//   onBlur?: () => void;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   checked?: boolean;
//   value: string;
//   inputRef?: RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void)
// };

export function FieldInput(props: FieldsInput) {
  return <TextField {...props} />;
}
