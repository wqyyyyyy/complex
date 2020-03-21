import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#aaa",
      main: "#313638",
      dark: "#2C3133",
      contrastText: "#ccc"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff"
    }
  },
})

export default theme;
