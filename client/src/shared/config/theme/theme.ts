import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

declare module "@mui/material/styles" {
  interface PaletteColorOptions {
    main?: string;
    light?: string;
    dark?: string;
    extraLight?: string;
    contrastText?: string;
  }

  interface Palette {
    gray: Palette["primary"];
    white: Palette["primary"];
    black: Palette["primary"];
  }

  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gray: true;
    white: true;
    black: true;
    custom: true;
  }
  interface ButtonPropsVariantOverrides {
    main: true;
  }
}

export const theme = createTheme({
  palette: palette,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "main" },
          style: {
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily: '"M PLUS 1p", sans-serif',
            color: palette.black.main,
            border: `1px solid ${palette.gray.light}`,
            borderRadius: "2px",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: palette.black.main,
              borderRadius: "2px",
            },
            textTransform: "none",
            "@media (min-width: 767.7px)": {
              fontSize: "1rem",
            },
          },
        },
      ],
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.125rem",
          color: palette.black.main,
          fontWeight: 500,
          fontFamily: '"M PLUS 1p", sans-serif',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: palette.black.main,
        },
      },
    },
  },
});
