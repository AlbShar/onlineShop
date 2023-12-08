import TextField from "@mui/material/TextField";

type Input = {
  required: boolean;
  name: "username" | "email" | "password";
  autoComplete: "username" | "email" | "password";
  fullWidth: boolean;
  label: string;
  autoFocus: boolean;
  margin: "dense" | "normal" | "none";
  type: "text" | "email" | "password";
};

export function FieldInput(props: Input) {
  return <TextField {...props} />;
}
