import { Link as LinkRouter } from "react-router-dom";
import MuiLink from "@mui/material/Link";

type Link = {
  to: string;
  children: string;
  onClick?: () => void
};

export const Link = ({ to, children, onClick }: Link) => {
  return (
    <LinkRouter to={to} onClick={onClick}>
      {children}
    </LinkRouter>
  );
};
