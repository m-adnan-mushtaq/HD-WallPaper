import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../theme';

const ErrorMsg = ({message}: {message: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}> {message}</Text>
    </View>
  );
};

export default ErrorMsg;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderColor: colors.ERROR_COLOR,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 32,
  },
  msg: {
    color: colors.ERROR_COLOR,
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 25,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
