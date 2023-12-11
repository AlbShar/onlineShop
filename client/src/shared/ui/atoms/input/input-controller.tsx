import {FC} from "react";
import { Controller, Control } from "react-hook-form";
import { FieldInput } from "./input";

import { FormInputs, TInputController } from "~/shared/api/auth/";

// interface FormInputs<T extends "registration" | "login" = 'registration' > {
//   email: string;
//   password: string;
//   username: T extends "registration" ? string : never;
// }

// type InputController = {
//   name: "email" | "username" | "password";
//   control: Control<FormInputs>;
//   isLoginPage: boolean;
//   rules: object;
//   type: "text" | "email" | "password";
//   autoComplete: "username" | "email" | "password";
// };

export const InputController = ({
  name,
  control,
  isLoginPage,
  rules,
  type,
  autoComplete,
}: TInputController) => {
  return (
    <Controller
      control={control}
      //@ts-ignore
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <FieldInput
          label={name}
          margin="normal"
          required
          fullWidth
          autoFocus={!isLoginPage}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          autoComplete={autoComplete}
        />
      )}
    />
  );
};
