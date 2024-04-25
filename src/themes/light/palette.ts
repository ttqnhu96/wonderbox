import { Color, PaletteOptions } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    third: string;
    white: string;
  }
  interface PaletteColor extends Color {}
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: '#ECECEC', // Main primary color used throughout the application'
    /*
     * Note:
     * If light and dark shades are not defined, MUI will automatically calculate from palette.primary.main
     */
    light: '#F2F2F2 ', // Lighter shade of the primary color
    dark: '#E0E0E0', // Darker shade of the primary color
  },
  text: {
    primary: '#323232',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
};
