import {NavigationContainer} from '@react-navigation/native';
import React, {Suspense, lazy} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors, darkTheme} from '../../theme';
import {BottomParamList, RootStackParamList} from '../../types';
import {HomeScreen} from '../../screens';
import {CustomIcon} from '../Design';
import {StatusBar} from 'react-native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {tabBarStyle} from '../../theme/darkTheme';
import Spinner from './Spinner';

const SearchScreen = lazy(() => import('../../screens/Search'));
const CategoryScreen = lazy(() => import('../../screens/Categories'));
const CategoryDetails = lazy(() => import('../../screens/CategoryDetails'));
const WallpaperDetails = lazy(() => import('../../screens/WallpaperDetails'));
const SettingScreen = lazy(() => import('../../screens/Settings'));

const Tab = createMaterialTopTabNavigator<BottomParamList>();

function MyTabs() {
  return (
    <Tab.Navigator
      id="RootTabs"
      sceneContainerStyle={{
        backgroundColor: colors.DARK_COLOR,
      }}
      tabBarPosition="bottom"
      backBehavior="history"
      style={{backgroundColor: colors.DARK_COLOR, elevation: 0}}
      screenOptions={({route}) => ({
        tabBarGap: 0,
        tabBarIcon({color, focused}) {
          const iconProps: GenericObject = {
            size: 35,
            color,
          };
          switch (route.name) {
            case 'Home':
              iconProps.name = 'home';
              iconProps.variant = 'Entypo';
              break;
            case 'Category':
              iconProps.name = 'grid';
              iconProps.variant = 'Entypo';
              break;
            case 'Search':
              iconProps.name = 'search';
              iconProps.variant = 'FontAwesome5';
              iconProps.size = 28;
              break;
            case 'Settings':
              iconProps.name = 'settings';
              iconProps.variant = 'IonIcon';
              break;
          }
          return <CustomIcon {...(iconProps as any)} />;
        },
        tabBarIndicatorStyle: {display: 'none'},
        tabBarActiveTintColor: colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: colors.LIGHT_COLOR,
        tabBarShowLabel: false,
        tabBarPressColor: 'transparent',
        tabBarStyle,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        },
        tabBarIconStyle: {
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          swipeEnabled: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator<RootStackParamList>();
function RootStackRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <RootStack.Navigator
        screenOptions={{
          headerTitleStyle: {color: colors.LIGHT_COLOR},
          headerTintColor: colors.LIGHT_COLOR,
          cardStyle: {
            flex: 1,
            backgroundColor: colors.DARK_COLOR,
          },
          headerBackground: () => (
            <LinearGradient
              style={{flex: 1, elevation: 10}}
              useAngle
              angle={60}
              colors={[
                colors.DARK_COLOR,
                colors.DARK_GREY_COLOR,
                colors.DARK_GREY_COLOR,
                colors.DARK_SECONDARY_COLOR,
                colors.DARK_COLOR,
              ]}
            />
          ),
        }}>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeTabs"
          component={MyTabs}
        />
        <RootStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="CategoryDetails"
          component={CategoryDetails}
        />
        <RootStack.Screen
          options={{
            title: 'Set WallPaper',
            ...TransitionPresets.ModalPresentationIOS,
          }}
          name="Wallpaper"
          component={WallpaperDetails}
        />
      </RootStack.Navigator>
    </Suspense>
  );
}

function AppNavigation(): React.JSX.Element {
  return (
    <>
      <NavigationContainer theme={darkTheme}>
        <RootStackRoutes />
      </NavigationContainer>
      <StatusBar backgroundColor={colors.DARK_COLOR} />
    </>
  );
}

export default AppNavigation;
