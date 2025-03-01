import { MenuItem } from "@/interfaces/components/layouts/admin/horizontal/item.interface";

export const menuHorizontal: MenuItem[] = [
  {
    label: "Perfil",
    key: "profile",
    icon: "pi pi-user",
  },
  {
    label: "Configuraciones",
    key: "configuration",
    icon: "pi pi-cog",
  },
  {
    isDivider: true,
  },
  {
    icon: "pi pi-sign-out",
    label: "Cerrar Sesión",
    key: "logout",
  },
];
