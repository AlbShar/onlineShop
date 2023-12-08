import { ReactNode } from "react";
import MuiTypography, { TypographyProps } from "@mui/material/Typography";

type Typograhy = {
  children: ReactNode;
  variant: TypographyProps['variant'];
};

export const Typography = ({ children, variant }: Typograhy) => {
  return (
    <MuiTypography
      variant={variant}
      sx={{ textAlign: "center", fontSize: "2.5rem", paddingTop: 10 }}
    >
      {children}
    </MuiTypography>
  );
};
