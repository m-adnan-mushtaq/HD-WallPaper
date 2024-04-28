import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import defaultStyles from '../../style';
import Icon from '../Design/Icon';
import {colors} from '../../theme';

type Props = {
  customMessage?: string;
};
const EmptyWallpaper = ({customMessage}: Props) => {
  return (
    <View style={[defaultStyles.flexCenter, {marginVertical: 32}]}>
      <View style={styles.content}>
        <Icon
          name="wallpaper"
          variant="MaterialCommunity"
          color={colors.LIGHT_COLOR}
          size={50}
        />
        <Text style={defaultStyles.secondaryTitle}>
          {customMessage ?? 'No Wallpapers found'}
        </Text>
      </View>
    </View>
  );
};

export default EmptyWallpaper;

const styles = StyleSheet.create({
  content: {
    gap: 8,
    alignItems: 'center',
  },
});
