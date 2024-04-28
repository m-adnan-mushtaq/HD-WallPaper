import {View, Text, ToastAndroid} from 'react-native';
import React from 'react';
import defaultStyles from '../style';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import LazyImage from '../components/Design/LazyImage';
import {colors} from '../theme';
import UiButton from '../components/Design/UiButton';
import {CustomIcon} from '../components/Design';
import {styles} from './WallpaperDetails';

export const WallpaperDetails = () => {
  const {
    params: {data: wallpaper},
  } = useRoute<RouteProp<RootStackParamList, 'Wallpaper'>>();

  const handleSetWallPaper = () => {
    try {
      WallPaperManager;
    } catch (error) {
      ToastAndroid.show('Operation Failed', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={defaultStyles.parent}>
      <View style={defaultStyles.absolute}>
        <LazyImage
          dimensions={{width, height}}
          url={wallpaper.largeImageURL}
          borderRadius={0}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <UiButton variant="Dark" onPress={() => {}} style={styles.wallpaperBtn}>
          <Text
            style={[
              defaultStyles.secondaryTitle,
              defaultStyles.textCenter,
              {textTransform: 'uppercase'},
            ]}>
            Apply
          </Text>
        </UiButton>
        <UiButton variant="Primary" style={styles.downloadBtn}>
          <CustomIcon
            name="download"
            variant="Feather"
            size={30}
            color={colors.WHITE_COLOR}
          />
        </UiButton>
      </View>
    </View>
  );
};
