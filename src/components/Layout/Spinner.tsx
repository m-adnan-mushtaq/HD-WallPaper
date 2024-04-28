import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../../theme';

type CProps = {
  size?: number;
  color?: string;
};
const Spinner = ({size, color}: CProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size ?? 30}
        color={color ?? colors.PRIMARY_TEXT_COLOR}
      />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});
