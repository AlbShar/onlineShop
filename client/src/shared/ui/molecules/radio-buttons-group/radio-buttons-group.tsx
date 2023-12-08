import { RadioButtons } from "~/shared/ui/atoms/button";

import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type TRadioGroup = {
  text: string;
  direction: "row" | "column";
  buttons: string[];
};

export const RadioButtonsGroup = ({
  text,
  direction,
  buttons,
}: TRadioGroup) => {
  return (
    <FormControl
      sx={
        direction === "row"
          ? { flexDirection: direction, alignItems: "center" }
          : null
      }
    >
      <FormLabel
        id="radio-buttons-group-label"
        sx={direction === "row" ? { margin: "0 17px 0 0" } : null}
      >
        {text}
      </FormLabel>
      <RadioGroup
        row={direction === "row"}
        aria-labelledby="radio-buttons-group-label"
        defaultValue={buttons[0]}
        name="radio-buttons-group"
      >
        <RadioButtons buttons={buttons} />
      </RadioGroup>
    </FormControl>
  );
};
