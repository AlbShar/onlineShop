import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type RadioButtons = {
  buttons: string[];
};
export const RadioButtons = ({ buttons }: RadioButtons) => {
  return (
    <>
      {buttons.map((button: string) => {
        return (
          <FormControlLabel
            key={button}
            value={button}
            control={<Radio />}
            label={button}
          />
        );
      })}
    </>
  );
};
