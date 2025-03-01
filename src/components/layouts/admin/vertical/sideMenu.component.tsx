import PanelMenuComponent from "@components/menus/panel/panelMenu.component";
import { ItemMenu } from "@interfaces/components/menus/panel/panelMenu.interface";

export default function SideMenu() {
  const menuItems: ItemMenu[] = [
    {
      label: "Files",
      icon: "pi pi-file",
      items: [
        {
          label: "Documents",
          icon: null,
          items: [
            {
              label: "Invoices",
              icon: "pi pi-file-pdf",
              items: [
                {
                  label: "Pending",
                  icon: "pi pi-stop",
                },
                {
                  label: "Paid",
                  icon: "pi pi-check-circle",
                  route: "/login",
                },
              ],
            },
            {
              label: "Clients",
              icon: "pi pi-users",
            },
          ],
        },
        {
          label: "Images",
          icon: "pi pi-image",
          items: [
            {
              label: "Logos",
              icon: "pi pi-image",
              route: "/login",
            },
          ],
        },
      ],
    },
    {
      label: "Cloud",
      icon: "pi pi-cloud",
      items: [
        {
          label: "Upload",
          icon: "pi pi-cloud-upload",
        },
        {
          label: "Download",
          icon: "pi pi-cloud-download",
        },
        {
          label: "Sync",
          icon: "pi pi-refresh",
        },
      ],
    },
    {
      label: "Devices",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Phone",
          icon: "pi pi-mobile",
        },
        {
          label: "Desktop",
          icon: "pi pi-desktop",
        },
        {
          label: "Tablet",
          icon: "pi pi-tablet",
        },
      ],
    },
  ];

  return (
    <PanelMenuComponent
      items={menuItems}
      multiple
      className="w-96"
      expandIcon="pi pi-angle-down"
      collapseIcon="pi pi-angle-up"
    />
  );
}
