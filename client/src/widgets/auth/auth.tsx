import { useLocation } from "react-router-dom";
import { Form } from "~/shared/ui/molecules/form";
import { FieldInput } from "~/shared/ui/atoms/input";
import { InputController } from "~/shared/ui/atoms/input";
import { Typography } from "~/shared/ui/atoms/typography";
import { Checkbox } from "~/shared/ui/atoms/checkbox";
import { ButtonSubmit } from "~/shared/ui/atoms/button";
import { Link } from "~/shared/ui/atoms/link";
import { BoxWrapper } from "~/shared/ui/molecules/box";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/system/Box";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";

interface FormInputs<T extends "registration" | "login"> {
  email: string;
  password: string;
  firstName: T extends "registration" ? string : never;
  lastName: T extends "registration" ? string : never;
}

export const Auth = () => {
  const { pathname } = useLocation(),
    path = pathname.slice(1) as "registration" | "login",
    isLoginPage = path === "login",
    title = isLoginPage ? "Sign in" : "Sign up",
    linkText = isLoginPage
      ? "Don't have an account? Sign Up"
      : "Already have an account? Sign in",
    checkboxLabel = isLoginPage
      ? "Remember me"
      : "I want to receive inspiration, marketing promotions and updates via email",
    linkTo = isLoginPage ? "/registration" : "/login";
  const {
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    resetField,
    control,
  } = useForm<FormInputs<typeof path>>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  });
  const onSubmit: SubmitHandler<FormInputs<typeof path>>  = (data: FormInputs<typeof path>) => {
    console.log(data);
    reset();
  };



  return (
    <Box sx={{ paddingTop: 5 }}>
      <Typography variant="h1">{title}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <>
            {isLoginPage ? (
              false
            ) : (
              <BoxWrapper>
                <InputController
                  control={control}
                  name="firstName"
                  isLoginPage={isLoginPage}
                  rules={{
                    minLength: { value: 3, message: "Min value - 3" },
                    maxLength: { value: 14, message: "Max value - 15" },
                  }}
                  type="text"
                />
                <ErrorMessage
                  errors={errors}
                  name="firstName"
                  render={({ message }) => (
                    <p style={{ color: "red" }}>{message}</p>
                  )}
                />
                <InputController
                  control={control}
                  name="lastName"
                  isLoginPage={isLoginPage}
                  rules={{
                    minLength: { value: 3, message: "Min value - 3" },
                    maxLength: { value: 14, message: "Max value - 15" },
                  }}
                  type="text"
                />
                <ErrorMessage
                  errors={errors}
                  name="lastName"
                  render={({ message }) => (
                    <p style={{ color: "red" }}>{message}</p>
                  )}
                />
              </BoxWrapper>
            )}
            <InputController
              control={control}
              name="email"
              isLoginPage={isLoginPage}
              rules={{
                minLength: { value: 3, message: "Min value - 3" },
                maxLength: { value: 14, message: "Max value - 15" },
              }}
              type="email"
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />
            <InputController
              control={control}
              name="password"
              isLoginPage={isLoginPage}
              rules={{
                minLength: { value: 3, message: "Min value - 3" },
                maxLength: { value: 14, message: "Max value - 15" },
              }}
              type="password"
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />
          </>
          <Checkbox label={checkboxLabel} />
          <ButtonSubmit>{title}</ButtonSubmit>
          <BoxWrapper>
            <>
              {isLoginPage ? <Link to="/forgot">Forgot Password?</Link> : false}
              <Link
                to={linkTo}
                onClick={() => {
                  if (path === 'registration') {
                    resetField("lastName");
                    resetField("firstName");
                  }
                }}
                
                
                
              >
                {linkText}
              </Link>
            </>
          </BoxWrapper>
        </Form>
      </form>
    </Box>
  );
};
