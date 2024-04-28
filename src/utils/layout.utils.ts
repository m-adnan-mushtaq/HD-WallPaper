export function getFormattedCategoryTitle(category: string) {
  if (!category) return '';
  return category.charAt(0).toUpperCase() + category.slice(1) + ` Wallpapers`;
}
