import {View} from 'react-native';
import React, {useEffect} from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import defaultStyles from '../style';
import {layoutUtils} from '../utils';
import WallpaperList from '../components/Wallpaper/WallpaperList';
import EmptyWallpaper from '../components/Wallpaper/EmptyWallpaper';

type CategoryDetailsRouteProp = RouteProp<
  RootStackParamList,
  'CategoryDetails'
>;

const CategoryDetails = () => {
  const route = useRoute<CategoryDetailsRouteProp>();
  const {category} = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: layoutUtils.getFormattedCategoryTitle(category),
    });
  }, [navigation, category]);

  return (
    <View style={defaultStyles.container}>
      {category ? (
        <WallpaperList category={category} />
      ) : (
        <EmptyWallpaper customMessage="Category not Supported yet!" />
      )}
    </View>
  );
};

export default CategoryDetails;
