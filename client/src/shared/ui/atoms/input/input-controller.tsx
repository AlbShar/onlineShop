import { Controller, Control } from "react-hook-form";
import { FieldInput } from "./input";

interface FormInputs<T extends "registration" | "login" = 'registration' > {
  email: string;
  password: string;
  userName: T extends "registration" ? string : never;
}

type InputController = {
  name: "email" | "userName" | "password" ;
  control: Control<FormInputs>;
  isLoginPage: boolean;
  rules: object;
  type: 'text' | 'email' | 'password';
};

export const InputController = ({
  name,
  control,
  isLoginPage,
  rules,
  type
}: InputController) => {
  return (
    <Controller
      control={control}
      //@ts-ignore
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref } }) => (
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
        />
      )}
    />
  );
};
