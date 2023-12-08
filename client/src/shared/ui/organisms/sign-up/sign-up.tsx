import { Form } from "~/shared/ui/molecules/form";
import { FieldInput } from "~/shared/ui/atoms/input";
import { Typography } from "~/shared/ui/atoms/typography";
import { Checkbox } from "~/shared/ui/atoms/checkbox";
import { ButtonSubmit } from "~/shared/ui/atoms/button";
import { Link } from "~/shared/ui/atoms/link";
import { BoxWrapper } from "~/shared/ui/molecules/box";

import Box from "@mui/system/Box";

export const SignUp = () => {
  return (
    <Box sx={{ paddingTop: 5 }}>
      <Typography variant="h1">Sign up</Typography>
      <Form>
        <>
          <BoxWrapper>
            <FieldInput
              label="First Name"
              margin="normal"
              name="First Name"
              required
              autoFocus
              type="text"
            />
            <FieldInput
              label="Last Name"
              margin="normal"
              name="Last Name"
              required
              autoFocus
              type="text"
            />
          </BoxWrapper>
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
        <Checkbox label="I want to receive inspiration, marketing promotions and updates via email." />
        <ButtonSubmit>Sing up</ButtonSubmit>
        <Link to="/login">Already have an account? Sign in</Link>
      </Form>
    </Box>
  );
};
