import { createMuiTheme } from '@material-ui/core/styles';
import getColor from 'app/palette';

const theme = createMuiTheme({
  palette: {
    common:{
      black: `${getColor('BLACK')}`,
      white: `${getColor('WHITE')}`
    },
    primary: {
      light: `${getColor('PRIMARY').lighten(20)}`,
      main: `${getColor('PRIMARY')}`,
      dark: `${getColor('PRIMARY').darken(20)}`,
    },
    text: {
      primary: `${getColor('BLACK')}`,
      secondary: `${getColor('GREY')}`,
      disabled: `${getColor('GREY')}`
    }
  }
});

export default theme;
