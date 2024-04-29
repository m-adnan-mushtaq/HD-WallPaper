import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {colors} from '../../theme';

const SettingsRow = ({
  pressHandler,
  Icon,
  label,
}: {
  pressHandler: () => void;
  label: string;
  Icon: React.ReactNode;
}) => {
  return (
    <TouchableHighlight
      onPress={pressHandler}
      underlayColor={colors.DARK_SECONDARY_COLOR}
      style={{
        backgroundColor: colors.DARK_GREY_COLOR,
        paddingVertical: 8,
        paddingHorizontal: 4,
        borderRadius: 4,
        margin: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        {Icon}
        <Text style={{color: colors.LIGHT_COLOR, fontSize: 16}}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default SettingsRow;
