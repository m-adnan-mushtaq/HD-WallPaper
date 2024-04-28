import {View, Text, Pressable} from 'react-native';
import {CustomIcon} from '.';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <CustomIcon
        name="keyboard-backspace"
        variant="Material"
        size={25}
        color={colors.LIGHT_COLOR}
      />
    </Pressable>
  );
};

export default GoBack;
