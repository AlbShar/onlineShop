import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';

type Checkbox = {
    label: string
}


export  function Checkbox({label}: Checkbox) {
  return (
    <FormGroup>
      <FormControlLabel  control={<MuiCheckbox />} label={label} />
    </FormGroup>
  );
}