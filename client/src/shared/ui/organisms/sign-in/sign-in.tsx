import { Form } from "~/shared/ui/molecules/form";
import { FieldInput } from "~/shared/ui/atoms/input";
import { Typography } from "~/shared/ui/atoms/typography";
import { Checkbox } from "~/shared/ui/atoms/checkbox";
import { ButtonSubmit } from "../../atoms/button";

export const FormSignIn = () => {
  return (
    <>
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
        <Checkbox label="Remember me"/>
        <ButtonSubmit>Sing in</ButtonSubmit>
      </Form>
    </>
  );
};
