export interface MenuItemRoute {
  name: string;
  params?: string;
}

export interface MenuItem {
  id: number;
  label: string;
  icon?: string;
  children?: MenuItem[];
  show?: boolean;
  route?: MenuItemRoute;
}

export interface MenuItemVerticalProps {
  item: MenuItem;
  isCollapsed?: boolean;
  onMenuClick?: (item: MenuItem) => void;
  activeItemId: number | null;
}
