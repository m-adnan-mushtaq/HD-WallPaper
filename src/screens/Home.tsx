import {Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Design/Header';
import defaultStyles from '../style';
import CategoriesList from '../components/category/Categories';
import WallpaperList from '../components/Wallpaper/WallpaperList';

const Home = () => {
  return (
    <View style={defaultStyles.parent}>
      <Header label="HD Wallpaper" />
      <View style={defaultStyles.container}>
        <CategoriesList direction="Horizontal" />
        <WallpaperList />
      </View>
    </View>
  );
};

export default Home;
