import '@assets/fonts/index.css';
import { muiButtonClassName } from '@components/common/wb-button/theme';
import { WBContainer } from '@components/common/wb-container';
import { ThemeProvider } from '@mui/material';
import { WBButton } from './components/common/wb-button';
import { theme } from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WBContainer sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <WBButton variant="contained">Contained</WBButton>
        <WBButton isLoading={true} variant="contained">
          Contained Loading
        </WBButton>
        <WBButton
          variant="outlined"
          className={muiButtonClassName.darkOutlined}
        >
          Dark Outlined
        </WBButton>
        <WBButton
          variant="outlined"
          className={muiButtonClassName.lightOutlined}
        >
          Light Outlined
        </WBButton>
      </WBContainer>
    </ThemeProvider>
  );
}

export default App;
