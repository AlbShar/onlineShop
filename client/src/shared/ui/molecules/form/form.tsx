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
      <Container component="form" maxWidth="sm">
      <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#cfe8fc",
            height: "100vh",
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
}
