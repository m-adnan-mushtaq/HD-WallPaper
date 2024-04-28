import {View, Text, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {colors} from '../../theme';
import defaultStyles from '../../style';

type Variant = 'Primary' | 'Dark';
type Props = {
  variant: Variant;
} & React.ComponentProps<typeof TouchableOpacity>;

const UiButton = ({
  style,
  variant,
  children,
  ...rest
}: Props & PropsWithChildren) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        {
          backgroundColor:
            variant === 'Dark' ? colors.DARK_GREY_COLOR : colors.SUCCESS_COLOR,
          borderRadius: 8,
          elevation: 8,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default UiButton;
