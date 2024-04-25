import { customizeButtonStyles } from '@components/common/wb-button/theme';
import { customizeContainerStyles } from '@components/common/wb-container/theme';
import { createTheme } from '@mui/material';
import { lightPalette } from './light';

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily: 'SF Pro Display Light',
  },
  // typography: {
  //   fontFamily: "Epilogue",
  // },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     lg2: 1336,
  //     xl: 1536,
  //   },
  // },
});

// lightTheme.components = {
//   ...lightTheme.components,
//   MuiButton: {
//     ...lightTheme.components?.MuiButton,
//     ...customizeButtonStyles(lightTheme),
//   },
// };

export const theme = createTheme(lightTheme, {
  components: {
    ...customizeButtonStyles(lightTheme),
    ...customizeContainerStyles(lightTheme),
  },
});
