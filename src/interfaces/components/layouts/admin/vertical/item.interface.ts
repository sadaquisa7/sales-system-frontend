export interface MenuItem {
  label: string;
  icon?: string;
  children?: MenuItem[];
  show?: boolean;
  [key: string]: any;
}

export interface MenuItemVerticalProps {
  item: MenuItem;
  isCollapsed?: boolean;
  onMenuClick?: (item: MenuItem) => void;
}
