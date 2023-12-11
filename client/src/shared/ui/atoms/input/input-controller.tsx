import { Controller } from "react-hook-form";
import { FieldInput } from "./input";

import { TInputController } from "~/shared/api/auth/";


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
