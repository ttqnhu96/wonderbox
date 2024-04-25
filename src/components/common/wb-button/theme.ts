import { Theme } from '@mui/material';

export const muiButtonClassName = {
  darkOutlined: 'sh-btn-dark-outlined',
  lightOutlined: 'sh-btn-light-outlined',
};

export const customizeButtonStyles = (theme: Theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '100px',
        textTransform: 'none',
      },
      sizeMedium: {
        width: '200px',
        height: '60px',
        fontSize: '18px',
      },
      contained: {
        backgroundColor: theme.palette.primary?.main,
        boxShadow:
          '-8px -8px 16px 0px #FFFFFF, 8px 8px 16px 0px rgba(166, 166, 166, 0.6)',
        '&:hover': {
          boxShadow:
            '-8px -8px 16px 0px #FFFFFF, 8px 8px 16px 0px rgba(166, 166, 166, 0.6)',
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.primary?.main,
          boxShadow:
            'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25), -8px -8px 16px 0px #FFFFFF, 8px 8px 16px 0px rgba(166, 166, 166, 0.6)',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid',
        [`&.MuiButton-outlined.${muiButtonClassName.darkOutlined}`]: {
          color: theme.palette.text.primary,
          borderColor: theme.palette.text.primary,
        },
        [`&.MuiButton-outlined.${muiButtonClassName.lightOutlined}`]: {
          color: theme.palette.common.white,
          borderColor: theme.palette.common.white,
        },
      },
      text: {
        color: theme.palette.text?.primary,
      },
    },
  },
});
