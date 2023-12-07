import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
    onChange={props.onChange}
  />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.gray.light}`,
}));

