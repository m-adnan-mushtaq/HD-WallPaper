import {StyleSheet} from 'react-native';
import {colors} from '../theme';

const defaultStyles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.DARK_COLOR,
  },
  container: {
    flex: 1,
    padding: 8,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  secondaryTitle: {
    color: colors.LIGHT_COLOR,
    fontSize: 18,
    marginVertical: 2,
  },
  lightText: {
    color: colors.LIGHT_COLOR,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default defaultStyles;
