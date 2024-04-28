import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../theme';

type CProps = {
  direction: 'Horizontal' | 'Vertical';
  label: string;
  source: ImageSourcePropType;
  handlePress: (category: string) => void;
};
const CategoryCard = ({direction, handlePress, label, source}: CProps) => {
  const dimensions =
    direction === 'Horizontal'
      ? {width: 250, height: 100}
      : {width: '100%', height: 150};

  return (
    <TouchableOpacity
      onPress={() => handlePress(label)}
      style={styles.container}>
      <ImageBackground
        style={{...(dimensions as any)}}
        source={source}
        {...(dimensions as any)}
        resizeMode={FastImage.resizeMode.cover}>
        <Text
          style={[styles.text, {fontSize: direction === 'Vertical' ? 35 : 25}]}>
          {label}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  text: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.LIGHT_COLOR,
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
