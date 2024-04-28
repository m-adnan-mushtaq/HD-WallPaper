import {View, Text} from 'react-native';
import React from 'react';
import defaultStyles from '../style';
import Header from '../components/Design/Header';
import CategoriesList from '../components/category/Categories';

const Categories = () => {
  return (
    <View style={defaultStyles.parent}>
      <Header label="Browse Categories" />
      <View style={defaultStyles.container}>
        <CategoriesList direction="Vertical" />
      </View>
    </View>
  );
};

export default Categories;
