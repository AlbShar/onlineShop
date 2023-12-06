import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "~/shared/config/theme";

export const withTheme = (Component: () => JSX.Element) => () =>
  (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
