import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Form = {
  children: ReactNode;
};

export function Form({ children }: Form) {
  return (
    <>
      <Container>
      <CssBaseline />
        <Box
          sx={{
            paddingTop: 2,
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            maxWidth: '500px',
            margin: "0 auto"
          }}
        >
          {children}
          
        </Box>
      </Container>
    </>
  );
}
