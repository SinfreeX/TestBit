import {createTheme} from "@mui/material";
import {muiThemeRoot} from "./root";

export const mainDarkTheme = createTheme({
  ...muiThemeRoot,
  palette: {
    background: {
      paper: '#121825',
      default: '#0E0C15'
    },
     text: {
      primary: '#FFFFFF',
       secondary: '#9CA3AF',
      disabled: '#616D8D'
     },
    grayScale: {
      gray1: '#616D8D',
      gray2: '#313E62',
      gray3: '#222B44',
      gray4: '#121825',
      gray5: '#374151',
      gray6: '#9CA3AF'
    },
    success: {
      main: '#1ABB34'
    },
    error: {
      main: '#FE4242'
    }
  },
})

