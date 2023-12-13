import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ErrorMessageCustom } from "~/shared/ui/atoms/errorMesage";
import { InputController } from "~/shared/ui/atoms/input";
import { Typography } from "~/shared/ui/atoms/typography";
import { Checkbox } from "~/shared/ui/atoms/checkbox";
import { ButtonSubmit } from "~/shared/ui/atoms/button";
import { Link } from "~/shared/ui/atoms/link";
import { BoxWrapper } from "~/shared/ui/molecules/box";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/system/Box";
import { ErrorMessage } from "@hookform/error-message";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { registration, login } from "~/features/auth/api/auth";
import { RegistrationBody, LoginBody } from "~/shared/api/auth/";
import { useCookie } from "~/shared/lib/use-cookie";


type TOptions<T extends string | Date = string> = {
  path: string;
  expires: T extends Date ? Date : string;
  "max-age": number;
  domain: string;
  secure: boolean;
  sameSite: "none" | "strict" | "lax";
  httpOnly: boolean;
};


export const Auth = () => {
  const { pathname } = useLocation(),
    path = pathname.slice(1),
    isLoginPage = path === "login",
    title = isLoginPage ? "Sign in" : "Sign up",
    linkText = isLoginPage
      ? "Don't have an account? Sign Up"
      : "Already have an account? Sign in",
    checkboxLabel = isLoginPage
      ? "Remember me"
      : "I want to receive inspiration, marketing promotions and updates via email",
    linkTo = isLoginPage ? "/registration" : "/login";

  type TData = typeof path extends "login" ? LoginBody : RegistrationBody;

  const [isUserAuth, setIsUserAuth] = useState<boolean | null>(null);
  const [cookie, setCookie] = useCookie<string>("token");
  useEffect(() => {
    if (isUserAuth === false) {
      setTimeout(() => setIsUserAuth(null), 5000);
    }
  }, [isUserAuth]);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    control,
  } = useForm<TData>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TData> = async (data: TData) => {
    try {
      const response = await (path === "login"
        ? login({
            email: data.email,
            password: data.password,
          })
        : registration(data));

      if (response) {
        const { token } = response;
        const options: Partial<TOptions> = { httpOnly: true, secure: true, sameSite: "strict", path: '/'};
        setCookie(token);
        reset();
      } else {
        setIsUserAuth(false);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Typography variant="h1">{title}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <CssBaseline />
          <Box
            sx={{
              paddingTop: 2,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <>
              {isLoginPage ? (
                false
              ) : (
                <>
                  <InputController
                    control={control}
                    name="username"
                    isLoginPage={isLoginPage}
                    rules={{
                      minLength: { value: 3, message: "Min value - 3" },
                      maxLength: { value: 14, message: "Max value - 15" },
                    }}
                    autoComplete="username"
                    type="text"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="username"
                    render={({ message }) => (
                      <ErrorMessageCustom>{message}</ErrorMessageCustom>
                    )}
                  />
                </>
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
                autoComplete="email"
              />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <ErrorMessageCustom>{message}</ErrorMessageCustom>
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
                autoComplete="password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <ErrorMessageCustom>{message}</ErrorMessageCustom>
                )}
              />
            </>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <Checkbox label={checkboxLabel} />
            </div>
            {isUserAuth === false ? (
              <ErrorMessageCustom>
                Пользователя с таким e-mail не существует или введен неверный
                пароль
              </ErrorMessageCustom>
            ) : (
              false
            )}
            <ButtonSubmit>{title}</ButtonSubmit>
            <BoxWrapper>
              <>
                {isLoginPage ? (
                  <Link to="/forgot">Forgot Password?</Link>
                ) : (
                  false
                )}
                <Link
                  to={linkTo}
                  onClick={() => {
                    if (path === "registration") {
                      resetField("username");
                    }
                  }}
                >
                  {linkText}
                </Link>
              </>
            </BoxWrapper>
          </Box>
        </Container>
      </form>
    </Box>
  );
};
