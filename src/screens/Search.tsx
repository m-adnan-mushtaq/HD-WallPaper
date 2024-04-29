import {View, Platform, Keyboard, Animated, Easing} from 'react-native';
import React, {useEffect, useState} from 'react';
import defaultStyles from '../style';
import Header from '../components/Design/Header';
import {CustomIcon} from '../components/Design';
import {colors} from '../theme';
import {TextInput} from 'react-native-gesture-handler';
import useDebounce from '../hooks/useDebounce';
import WallpaperList from '../components/Wallpaper/WallpaperList';
import EmptyWallpaper from '../components/Wallpaper/EmptyWallpaper';
import {useNavigation} from '@react-navigation/native';
import {NestedNavigationT} from '../types';
import {layoutUtils} from '../utils';

const Search = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce({value: query, milliSeconds: 500});
  const navigation = useNavigation<NestedNavigationT<'Search'>>();

  const opacity = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200, // Adjust duration as needed
          useNativeDriver: false,
          easing: Easing.ease,
        }).start(() => {
          navigation.setOptions(
            layoutUtils.getTabBarStyleHelpers(opacity as any),
          );
        });
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => {
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200, // Adjust duration as needed
          useNativeDriver: false,
          easing: Easing.ease,
        }).start(() => {
          navigation.setOptions(
            layoutUtils.getTabBarStyleHelpers(opacity as any),
          );
        });
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [navigation]);

  return (
    <View style={defaultStyles.parent}>
      <Header>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 4,
          }}>
          <CustomIcon
            name="search"
            variant="Feather"
            color={colors.SILVER_COLOR}
            size={25}
          />
          <TextInput
            value={query}
            onChangeText={setQuery}
            keyboardType="web-search"
            placeholder="Search wallpaper..."
            maxLength={30}
            placeholderTextColor={colors.SILVER_COLOR}
            style={{
              fontSize: 14,
              flex: 1,
              color: colors.LIGHT_COLOR,
            }}
          />
        </View>
      </Header>
      <View style={defaultStyles.container}>
        {debouncedQuery.length > 2 ? (
          <WallpaperList search={debouncedQuery} />
        ) : (
          <EmptyWallpaper customMessage="Type in search to explore wallpapers" />
        )}
      </View>
    </View>
  );
};

export default Search;
