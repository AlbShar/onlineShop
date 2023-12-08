import Button from '@mui/material/Button';

type Button = {
    children: string;
};

export const ButtonSubmit = ({children}: Button) => {
    return (
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {children}
      </Button>
    );
};

