import {FlatList} from 'react-native';
import CategoryCard from '../Home/CategoryCard';
import {useNavigation} from '@react-navigation/native';
import {NestedNavigationT} from '../../types';

const list = [
  {
    label: 'fashion',
    source: require('../../assets/categories/fashion.jpg'),
  },
  {
    label: 'animals',
    source: require('../../assets/categories/animal.jpg'),
  },
  {
    label: 'health',
    source: require('../../assets/categories/doctor.jpg'),
  },
  {
    label: 'nature',
    source: require('../../assets/categories/nature.jpg'),
  },
  {
    label: 'education',
    source: require('../../assets/categories/education.jpg'),
  },
  {
    label: 'food',
    source: require('../../assets/categories/food.jpg'),
  },
  {
    label: 'industry',
    source: require('../../assets/categories/industry.jpg'),
  },
  {
    label: 'music',
    source: require('../../assets/categories/music.jpg'),
  },
  {
    label: 'religion',
    source: require('../../assets/categories/religion.jpg'),
  },
  {
    label: 'science',
    source: require('../../assets/categories/science.jpg'),
  },
];

const CategoriesList = ({direction}: {direction: Direction}) => {
  const navigation: NestedNavigationT<'Category'> = useNavigation();

  const handleNavigateCategory = (category: string) => {
    navigation.navigate('CategoryDetails', {
      category,
    });
  };

  return (
    <FlatList
      horizontal={direction === 'Horizontal'}
      data={list}
      style={{
        maxHeight: direction == 'Horizontal' ? 100 : 'auto',
      }}
      keyExtractor={item => item.label}
      contentContainerStyle={{
        gap: 8,
      }}
      renderItem={({item}) => (
        <CategoryCard
          direction={direction}
          handlePress={handleNavigateCategory}
          label={item.label}
          source={item.source}
        />
      )}
    />
  );
};

export default CategoriesList;
