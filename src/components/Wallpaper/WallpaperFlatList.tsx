import {View, Text, FlatList} from 'react-native';
import React from 'react';
import WallpaperCard from '../Home/WallpaperCard';
import {common} from '../../constants';

const WallpaperFlatList = ({data}: {data: PixabayWallPaper[]}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      numColumns={common.WALLPAPER_COLS}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 8,
        columnGap: 4,
        backgroundColor: 'yellow',
      }}
      renderItem={({item}) => <WallpaperCard wallpaper={item} />}
    />
  );
};

export default React.memo(WallpaperFlatList);
