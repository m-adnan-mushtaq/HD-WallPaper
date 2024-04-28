import type {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

export type BottomParamList = {
  Home: {};
  Category: {};
  Search: {};
  Settings: {};
};

export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<BottomParamList>;
  CategoryDetails: {
    category: string;
  };
  Wallpaper: {
    data: PixabayWallPaper;
  };
};

type NestedProps<T extends keyof BottomParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<BottomParamList, T>,
  StackScreenProps<RootStackParamList>
>;

export type NestedNavigationT<T extends keyof BottomParamList> =
  NestedProps<T>['navigation'];

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
