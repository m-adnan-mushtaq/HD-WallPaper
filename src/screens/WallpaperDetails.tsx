import {applyWallpaper} from '@codeooze/react-native-wallpaper-manager';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {CustomIcon} from '../components/Design';
import LazyImage from '../components/Design/LazyImage';
import UiButton from '../components/Design/UiButton';
import defaultStyles from '../style';
import {colors} from '../theme';
import {RootStackParamList} from '../types';
import {permissionUtils} from '../utils';
const {width, height} = Dimensions.get('screen');

const WallpaperDetails = () => {
  //hooks
  const {
    params: {data: wallpaper},
  } = useRoute<RouteProp<RootStackParamList, 'Wallpaper'>>();

  //actions
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
      //get file extension from url
      const fileExtension = wallpaper.largeImageURL.split('.').pop();
      const res = await ReactNativeBlobUtil.config({
        fileCache: true,
        appendExt: fileExtension,
        addAndroidDownloads: {
          useDownloadManager: true, // <-- this is the only thing required
          notification: true,
          title: `${wallpaper.id}.${fileExtension}`,
          mime: `image/${fileExtension}`,
          description: 'File downloaded by download manager.',
          path: `${ReactNativeBlobUtil.fs.dirs.LegacyPictureDir}/${wallpaper.id}.${fileExtension}`,
        },
      }).fetch('GET', wallpaper.largeImageURL);
      ToastAndroid.show(`Save to Gallery!`, ToastAndroid.SHORT);
      // res.flush();
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
