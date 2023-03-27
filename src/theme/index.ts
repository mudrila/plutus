import { createTheme } from '@mui/material/styles';
import { Inknut_Antiqua } from '@next/font/google';

export const inknutAntiqua = Inknut_Antiqua({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#471AA0',
    },
    secondary: {
      main: '#19857b',
    },
  },
  typography: {
    fontFamily: inknutAntiqua.style.fontFamily,
  },
});

export default theme;
