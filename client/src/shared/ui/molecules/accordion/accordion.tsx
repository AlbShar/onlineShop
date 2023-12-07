import { useState, SyntheticEvent } from "react";
import { Accordion } from "~/shared/ui/atoms/accordion";
import { AccordionSummary } from "~/shared/ui/atoms/accordion";
import { AccordionDetails } from "~/shared/ui/atoms/accordion";
import Typography from "@mui/material/Typography";

export function AccordionGroup() {
  const [isFirstExpanded, setIsFirstExpanded] = useState<string | undefined>(
    undefined
  );
  const [isSecondExpanded, setISecondExpanded] = useState<string | undefined>(
    undefined
  );
  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      const numberPanel = +event.currentTarget.id
        .split("")
        .find((item) => Number.isInteger(+item));
      numberPanel === 1
        ? setIsFirstExpanded(newExpanded ? panel : undefined)
        : setISecondExpanded(newExpanded ? panel : undefined);
    };

  return (
    <>
      <Accordion onChange={handleChange("panel1")}>
        <AccordionSummary
          aria-controls="panel1a-content"
          expanded={isFirstExpanded}
          id="panel1"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onChange={handleChange("panel2")}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel2"
          expanded={isSecondExpanded}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
