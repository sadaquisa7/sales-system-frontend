"use client";
import { useRouter } from "next/navigation";
import { PanelMenu } from "primereact/panelmenu";
import {
  PanelMenuFormProps,
  ItemMenu,
} from "@interfaces/components/menus/panel/panelMenu.interface";
import { MenuItem, MenuItemCommandEvent } from "primereact/menuitem";

const propsDefault: Partial<PanelMenuFormProps> = {
  children: null,
  collapseIcon: null,
  expandIcon: null,
  items: [],
  multiple: false,
  pt: null,
  ptOptions: null,
  transitionOptions: null,
  unstyled: false,
  className: "",
};

const PanelMenuComponent: React.FC<PanelMenuFormProps> = (propsCurrent) => {
  const props = { ...propsDefault, ...propsCurrent };

  const router = useRouter();
  const redirectPage = (item: MenuItem) => {
    const route = item.data?.route;
    if (route) router.push(route);
  };

  const transformMenuItems = (items: ItemMenu[]): MenuItem[] =>
    items.map((item) => {
      const hasRoute = !!item.route;
      const hasItems = !!item.items;

      const transformedItem: MenuItem = {
        ...item,
        ...(hasRoute && {
          data: { route: item.route },
          command: (event: MenuItemCommandEvent) => redirectPage(event.item),
        }),
        ...(hasItems && { items: transformMenuItems(item.items!) }),
      };

      return transformedItem;
    });

  const newItems = transformMenuItems(props.items);

  return (
    <PanelMenu
      collapseIcon={props.collapseIcon}
      expandedKeys={props.expandedKeys}
      expandIcon={props.expandIcon}
      model={newItems ?? undefined}
      multiple={props.multiple}
      pt={props.pt ?? undefined}
      ptOptions={props.ptOptions ?? undefined}
      transitionOptions={props.transitionOptions ?? undefined}
      unstyled={props.unstyled}
      className={props.className}
    >
      {props.children}
    </PanelMenu>
  );
};

export default PanelMenuComponent;
