import {DarkTheme, type Theme} from '@react-navigation/native';
import * as colors from './colors';

const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.DARK_COLOR,
    text: colors.LIGHT_COLOR,
    notification: colors.DARK_SECONDARY_COLOR,
  },
};

export default darkTheme;
