import { Form } from "~/shared/ui/molecules/form";
import { FieldInput } from "~/shared/ui/atoms/input";
import { Typography } from "~/shared/ui/atoms/typography";
import { Checkbox } from "~/shared/ui/atoms/checkbox";
import { ButtonSubmit } from "~/shared/ui/atoms/button";
import { Link } from "~/shared/ui/atoms/link";
import { BoxWrapper } from "~/shared/ui/molecules/box";

import Box from "@mui/system/Box";

export const FormSignIn = () => {
  return (
    <Box sx={{paddingTop: 5}}>
      <Typography variant="h1">Sign in</Typography>
      <Form>
        <>
          <FieldInput
            label="email"
            margin="normal"
            name="email"
            required
            autoFocus
            fullWidth
            autoComplete="email"
            type="email"
          />
          <FieldInput
            label="password"
            margin="normal"
            name="password"
            required
            autoFocus
            fullWidth
            autoComplete="password"
            type="password"
          />
        </>
        <Checkbox label="Remember me" />
        <ButtonSubmit>Sing in</ButtonSubmit>
        <BoxWrapper>
          <>
          <Link to="/forgot">Forgot Password?</Link>
          <Link to="/registration">Don't have an account? Sign Up</Link>
          </>
        </BoxWrapper>

      </Form>
    </Box>
  );
};
