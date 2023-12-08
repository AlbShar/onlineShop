import TextField from "@mui/material/TextField";

type Input = {
  required: boolean;
  name: "username" | "email" | "password";
  autoComplete: "username" | "email" | "password";
  fullWidth: boolean;
  label: string;
  autoFocus: boolean;
  margin:  "dense" | "normal" | "none";
};

export function FieldInput({
  required,
  name,
  autoComplete,
  fullWidth,
  label,
  autoFocus,
  margin,
}: Input) {
  return (
    <TextField
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
    />
  );
}
