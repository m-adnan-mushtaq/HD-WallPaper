import {tabBarStyle} from '../theme/darkTheme';

export function getFormattedCategoryTitle(category: string) {
  if (!category) return '';
  return category.charAt(0).toUpperCase() + category.slice(1) + ` Wallpapers`;
}

export function getTabBarStyleHelpers(opacity: number) {
  return {
    tabBarStyle: {
      ...tabBarStyle,
      opacity,
    },
  };
}
