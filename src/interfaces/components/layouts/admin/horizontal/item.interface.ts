export interface MenuItem {
  label?: string;
  key?: string;
  icon?: string;
  component?: React.ElementType;
  isDivider?: boolean;
}

export interface MenuItemProps {
  item: MenuItem;
  selected?: string;
  onMenuClick: (item: MenuItem) => void;
}
