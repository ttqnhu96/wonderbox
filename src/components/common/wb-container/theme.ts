import { Theme } from '@mui/material';

export const customizeContainerStyles: (theme: Theme) => any = (theme: Theme) => ({
  MuiContainer: {
    styleOverrides: {
      root: {
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
});
