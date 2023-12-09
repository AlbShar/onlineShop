import { useLocation } from "react-router-dom";
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

interface FormInputs<T extends "registration" | "login"> {
  email: string;
  password: string;
  userName: T extends "registration" ? string : never;
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
    resetField,
    control,
  } = useForm<FormInputs<typeof path>>({
    mode: "onChange",
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FormInputs<typeof path>> = (
    data: FormInputs<typeof path>
  ) => {
    console.log(data);
    reset();
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
                    name="userName"
                    isLoginPage={isLoginPage}
                    rules={{
                      minLength: { value: 3, message: "Min value - 3" },
                      maxLength: { value: 14, message: "Max value - 15" },
                    }}
                    type="text"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="userName"
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
                      resetField("userName");
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
