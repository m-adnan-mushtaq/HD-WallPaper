import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ToastAndroid,
  Alert,
} from 'react-native';
import React from 'react';
import defaultStyles from '../style';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import LazyImage from '../components/Design/LazyImage';
import {colors} from '../theme';
import UiButton from '../components/Design/UiButton';
import {CustomIcon} from '../components/Design';
import {applyWallpaper} from '@codeooze/react-native-wallpaper-manager';
import {permissionUtils} from '../utils';
import RNFetchBlob from 'rn-fetch-blob';

const {width, height} = Dimensions.get('screen');

const WallpaperDetails = () => {
  const {
    params: {data: wallpaper},
  } = useRoute<RouteProp<RootStackParamList, 'Wallpaper'>>();

  const handleSetWallPaper = async () => {
    try {
      await applyWallpaper(wallpaper.largeImageURL, 'Home');
      ToastAndroid.showWithGravity(
        'Applied',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } catch (error) {
      ToastAndroid.show('Operation Failed', ToastAndroid.SHORT);
    }
  };

  const handleDownload = async () => {
    try {
      const isRequestGranted = await permissionUtils.requestUserStorage();
      if (!isRequestGranted) return;
      const res = await RNFetchBlob.config({
        fileCache: true,
        appendExt: 'png',
        addAndroidDownloads: {
          notification: true,
          title: `WallPaper ${wallpaper.id} Downloaded`,
          mime: 'image/png',
        },
      }).fetch('GET', wallpaper.userImageURL);
      ToastAndroid.show(`Saved! ${res.path()}`, ToastAndroid.SHORT);
      res.flush();
    } catch (error) {
      Alert.alert('Download Fail or Network Error');
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
        <UiButton
          variant="Dark"
          onPress={handleSetWallPaper}
          style={styles.wallpaperBtn}>
          <Text
            style={[
              defaultStyles.secondaryTitle,
              defaultStyles.textCenter,
              {textTransform: 'uppercase'},
            ]}>
            Apply
          </Text>
        </UiButton>
        <UiButton
          onPress={handleDownload}
          variant="Primary"
          style={styles.downloadBtn}>
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

export default WallpaperDetails;

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 'auto',
    minHeight: 50,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  wallpaperBtn: {
    flex: 0.7,
    paddingVertical: 8,
  },
  downloadBtn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 6,
  },
});
