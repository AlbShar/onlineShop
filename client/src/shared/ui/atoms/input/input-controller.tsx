import { Controller, Control } from "react-hook-form";
import { FieldInput } from "./input";
import { ObjectBindingOrAssignmentElement } from "typescript";

type InputController = {
  name: "email" | "username" | "password" | "First Name" | "Last Name";
  control: Control;
  isLoginPage: boolean;
  rules: object;
};

export const InputController = ({
  name,
  control,
  isLoginPage,
  rules,
}: InputController) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <FieldInput
          label={name}
          margin="normal"
          name={name}
          required
          autoFocus={!isLoginPage}
          type="text"
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          inputRef={ref}
        />
      )}
    />
  );
};
