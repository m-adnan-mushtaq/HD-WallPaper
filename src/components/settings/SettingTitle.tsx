import {PropsWithChildren} from 'react';
import defaultStyles from '../../style';
import {Text} from 'react-native';

const SettingsTitle = ({children}: PropsWithChildren) => (
  <Text style={defaultStyles.secondaryTitle}>{children}</Text>
);

export default SettingsTitle;
