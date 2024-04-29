import {PropsWithChildren} from 'react';
import defaultStyles from '../../style';
import {Text} from 'react-native';
import {colors} from '../../theme';

const SettingsTitle = ({children}: PropsWithChildren) => (
  <Text
    style={[
      defaultStyles.secondaryTitle,
      {
        marginLeft: 4,
        textTransform: 'uppercase',
        color: colors.SILVER_COLOR,
      },
    ]}>
    {children}
  </Text>
);

export default SettingsTitle;
