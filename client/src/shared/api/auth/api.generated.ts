import {  Control } from "react-hook-form";
import { RefObject } from "react";

type NameInput = "username" | "email" | "password";
type TypeInput = "text" | "email" | "password";
type AutoCompleteInput = "username" | "email" | "password";

type AutoFieldsInputs = {
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value: string;
  inputRef?:
    | RefObject<HTMLInputElement>
    | ((instance: HTMLInputElement | null) => void);
};
type CutsomFieldsInput = {
  required: boolean;
  name: NameInput;
  autoComplete: AutoCompleteInput;
  fullWidth?: boolean;
  label: string;
  autoFocus?: boolean;
  margin: "dense" | "normal" | "none";
  type: TypeInput;
};



export type FieldsInput = CutsomFieldsInput & AutoFieldsInputs;
export interface FormInputs<T extends "registration" | "login" > {
  email: string;
  password: string;
  username: T extends "registration" ? string : never;
}
export type LoginBody = {
  login: string;
  password: string;
  remember?: boolean;
};
export interface TInputController<T extends "registration" | "login" = 'registration'> {
  name: NameInput;
  control: Control<FormInputs<T>>;
  isLoginPage: boolean;
  rules: object;
  type: TypeInput;
  autoComplete: AutoCompleteInput;
};
