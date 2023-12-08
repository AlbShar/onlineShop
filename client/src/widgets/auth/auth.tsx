import { useLocation } from "react-router-dom";
import { Form } from "~/shared/ui/molecules/form";
import { FieldInput } from "~/shared/ui/atoms/input";
import { Typography } from "~/shared/ui/atoms/typography";
import { Checkbox } from "~/shared/ui/atoms/checkbox";
import { ButtonSubmit } from "~/shared/ui/atoms/button";
import { Link } from "~/shared/ui/atoms/link";
import { BoxWrapper } from "~/shared/ui/molecules/box";

import Box from "@mui/system/Box";

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

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Typography variant="h1">{title}</Typography>
      <Form>
        <>
          {isLoginPage ? (
            false
          ) : (
            <BoxWrapper>
              <FieldInput
                label="First Name"
                margin="normal"
                name="First Name"
                required
                autoFocus={!isLoginPage}
                type="text"
              />
              <FieldInput
                label="Last Name"
                margin="normal"
                name="Last Name"
                required
                type="text"
              />
            </BoxWrapper>
          )}
          <FieldInput
            label="email"
            margin="normal"
            name="email"
            required
            autoFocus={isLoginPage}
            fullWidth
            autoComplete="email"
            type="email"
          />
          <FieldInput
            label="password"
            margin="normal"
            name="password"
            required
            fullWidth
            autoComplete="password"
            type="password"
          />
        </>
        <Checkbox label={checkboxLabel} />
        <ButtonSubmit>{title}</ButtonSubmit>
        <BoxWrapper>
          <>
            {isLoginPage ? <Link to="/forgot">Forgot Password?</Link> : false}
            <Link to={linkTo}>{linkText}</Link>
          </>
        </BoxWrapper>
      </Form>
    </Box>
  );
};
