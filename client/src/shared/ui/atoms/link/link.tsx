import { Link as LinkRouter } from "react-router-dom";
import MuiLink from "@mui/material/Link";

type Link = {
  to: string;
  children: string;
};

export const Link = ({ to, children }: Link) => {
  return (
    <LinkRouter to={to}>
      {children}
    </LinkRouter>
  );
};
