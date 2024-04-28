import {View, Text, Linking, SectionList} from 'react-native';
import React from 'react';
import defaultStyles from '../style';
import Header from '../components/Design/Header';
import GoBack from '../components/Design/GoBack';
import {colors} from '../theme';
import {common} from '../constants';
import {CustomIcon} from '../components/Design';
import {SettingsRow, SettingsTitle} from '../components/settings';

const defaultIconProps = {
  size: 30,
  color: colors.LIGHT_COLOR,
};

const settingsContent = [
  {
    title: 'Legal',
    data: [
      {
        key: 'policy',
        label: 'Privacy Policy',
        handlePress: () => Linking.openURL(common.PRIVACY_LINK),
        icon: {
          ...defaultIconProps,
          size: 20,
          name: 'user-shield',
          variant: 'FontAwesome5',
        },
      },
      {
        key: 'terms',
        label: 'Terms of Conditions',
        handlePress: () => Linking.openURL(common.TERM_LINK),
        icon: {
          ...defaultIconProps,
          size: 20,
          name: 'legal',
          variant: 'FontAwesome',
        },
      },
    ],
  },
  {
    title: 'Support',
    data: [
      {
        key: 'rate',
        label: 'Rate Us',
        handlePress: () => Linking.openURL(common.RATE_US_LINK),
        icon: {
          ...defaultIconProps,
          name: 'star-half-alt',
          size: 25,
          variant: 'FontAwesome5',
        },
      },
      {
        key: 'reach',
        label: 'Need Support?',
        handlePress: () => Linking.openURL(common.SUPPORT_LINK),
        icon: {
          ...defaultIconProps,
          size: 25,
          name: 'contact-support',
          variant: 'Material',
        },
      },
    ],
  },
];
const Settings = () => {
  return (
    <View style={defaultStyles.parent}>
      <Header>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 16,
            flexDirection: 'row',
            gap: 8,
          }}>
          <GoBack />
          <Text style={defaultStyles.secondaryTitle}>Settings</Text>
        </View>
      </Header>
      <View style={defaultStyles.container}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={settingsContent}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <SettingsRow
              pressHandler={item.handlePress}
              label={item.label}
              Icon={<CustomIcon {...(item.icon as any)} />}
            />
          )}
          renderSectionHeader={({section}) => (
            <SettingsTitle>{section.title}</SettingsTitle>
          )}
        />
      </View>
    </View>
  );
};

export default Settings;
