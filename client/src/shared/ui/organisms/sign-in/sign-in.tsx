import { Form } from "~/shared/ui/molecules/form";
import { FieldInput } from "~/shared/ui/atoms/input";

export const FormSignIn = () => {
  return (
    <Form>
      <>
        <FieldInput
          label="email"
          margin="normal"
          name="email"
          required
          autoFocus
          fullWidth={false}
          autoComplete="email"
        />
         <FieldInput
          label="password"
          margin="normal"
          name="password"
          required
          autoFocus
          fullWidth={false}
          autoComplete="password"
        />
      </>
    </Form>
  );
};
