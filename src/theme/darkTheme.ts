import {DarkTheme, type Theme} from '@react-navigation/native';
import * as colors from './colors';

export const tabBarStyle = {
  backgroundColor: colors.DARK_GREY_COLOR,
  marginHorizontal: 20,
  borderRadius: 16,
  marginBottom: 8,
  elevation: 8,
  minHeight: 60,
};

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
