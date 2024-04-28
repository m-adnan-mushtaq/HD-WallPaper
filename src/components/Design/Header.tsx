import {View, Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {colors} from '../../theme';
import defaultStyles from '../../style';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({
  children,
  label,
}: PropsWithChildren & {
  label?: string;
}) => {
  return (
    <LinearGradient
      colors={[
        colors.DARK_COLOR,
        colors.DARK_GREY_COLOR,
        colors.DARK_COLOR,
        // '#595E69',
      ]}
      useAngle
      angle={45}
      style={[styles.container, !label && {paddingVertical: 0}]}>
      {label ? <Text style={[styles.text]}>{label}</Text> : children}
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARK_GREY_COLOR,
    padding: 16,
    elevation: 8,
  },
  text: {
    color: colors.PRIMARY_TEXT_COLOR,
    fontSize: 20,
    fontWeight: '500',
  },
});
