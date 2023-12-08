import { ReactNode } from "react";
import Box from "@mui/system/Box";

type BoxWrapper = {
  children: ReactNode;
};

export const BoxWrapper = ({ children }: BoxWrapper) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};
