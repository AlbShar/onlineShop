import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";


interface CustomPropsAccordionSummary extends AccordionSummaryProps {
  expanded: string | undefined;
}

export const AccordionSummary = styled((props: CustomPropsAccordionSummary) => (
  <MuiAccordionSummary
    expandIcon={props.expanded ? <AddIcon/> : <RemoveIcon/>}
    {...props}
  />
))(({ theme }) => {
  return {
    backgroundColor: "transparent",
    borderTop: `1px solid ${theme.palette.gray.light}`,
    flexDirection: "row",
  };
});
