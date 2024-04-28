import FAIcon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type VariantT =
  | 'Material'
  | 'FontAwesome5'
  | 'FontAwesome'
  | 'IonIcon'
  | 'Feather'
  | 'Entypo'
  | 'MaterialCommunity';

type VectorIconProps = React.ComponentProps<typeof FAIcon>;

export type IconProps = {
  variant?: VariantT;
} & VectorIconProps;

const Icon = ({variant = 'FontAwesome5', ...rest}: IconProps) => {
  let VectorIcon = <FAIcon {...rest} />;
  if (variant === 'IonIcon') VectorIcon = <IonIcon {...rest} />;
  if (variant === 'Material') VectorIcon = <MaterialIcon {...rest} />;
  if (variant === 'Feather') VectorIcon = <FeatherIcon {...rest} />;
  if (variant === 'Entypo') VectorIcon = <EntypoIcon {...rest} />;
  if (variant === 'FontAwesome') VectorIcon = <FontAwesomeIcon {...rest} />;
  if (variant === 'MaterialCommunity')
    VectorIcon = <MaterialCommunityIcon {...rest} />;
  return VectorIcon;
};

export default Icon;
