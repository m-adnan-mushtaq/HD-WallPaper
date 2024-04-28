import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React, {useMemo} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {common} from '../../constants';
import {RootStackParamList} from '../../types';
import LazyImage from '../Design/LazyImage';

const borderRadius = 4;

type CardProps = {
  wallpaper: PixabayWallPaper;
};

const WallpaperCard = ({wallpaper}: CardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  //calculate dimensions
  const dimensions = useMemo(() => {
    return {
      width: Dimensions.get('screen').width / 2 - 5,
      height: common.WALLPAPER_HEIGHT,
    };
  }, [wallpaper]);

  //event handlers

  const handleNavigate = () => {
    navigation.navigate('Wallpaper', {
      data: wallpaper,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={{
        borderRadius,
        position: 'relative',
        ...(dimensions as any),
        margin: 1,
      }}>
      <LazyImage
        borderRadius={borderRadius}
        dimensions={dimensions}
        url={wallpaper.webformatURL}
      />
    </TouchableOpacity>
  );
};

export default React.memo(WallpaperCard);

const styles = StyleSheet.create({
  placeholder: {position: 'absolute', left: 0, right: 0},
});
