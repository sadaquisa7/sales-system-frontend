"use client";

import { useState } from "react";
import MenuListVertical from "./list.component";
import { useRouter } from "next/navigation";
import { MenuItem } from "@interfaces/components/layouts/admin/vertical/item.interface";
import { sideMenuVariant } from "./variants/sideMenu.variants";
import { useIsOpenMenuMobile } from "@contexts/menu/isOpenMobile";
const SideMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTransitionEnd, setIsTransitionEnd] = useState(true);
  const router = useRouter();
  const { isOpenMenuMobile } = useIsOpenMenuMobile();

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
    setIsTransitionEnd(false);
  };

  // Handle menu item clicks with routing
  const menuClick = (item: MenuItem) => {
    if (item.route) {
      const { name, params } = item.route;
      if (name) {
        // In Next.js, we use router.push for navigation
        // You'll need to adapt this based on your routing setup
        router.push(`/${name}${params ? `/${params}` : ""}`);
      }
    }
  };

  // Handle transition end
  const onTransitionEnd = () => {
    setIsTransitionEnd(true);
  };

  const sampleMenuData: MenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      route: { name: "dashboard" },
    },
    {
      label: "Users",
      icon: "pi pi-users",
      children: [
        {
          label: "List Users",
          icon: "pi pi-list",
          route: { name: "users", params: "list" },
        },
        {
          label: "Add User",
          icon: "pi pi-user-plus",
          route: { name: "users", params: "add" },
        },
      ],
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      children: [
        {
          label: "Profile",
          icon: "pi pi-user",
          route: { name: "settings", params: "profile" },
        },
        {
          label: "Preferences",
          icon: "pi pi-sliders-h",
          route: { name: "settings", params: "preferences" },
        },
      ],
    },
    {
      label: "Reports",
      icon: "pi pi-chart-bar",
      route: { name: "reports" },
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      route: { name: "logout" },
    },
  ];

  const {
    desktopContainer,
    mobileContainer,
    content,
    nav,
    toggle,
    toggleContent,
  } = sideMenuVariant({
    isCollapsed,
    isTransitioning: !isTransitionEnd,
    isOpenMobile: isOpenMenuMobile,
  });

  return (
    <>
      {/* Desktop version */}
      <div className={desktopContainer()} onTransitionEnd={onTransitionEnd}>
        <div className={content()}>
          <nav className={nav()} aria-labelledby="nav-vertical">
            <MenuListVertical
              menu={sampleMenuData}
              isCollapsed={isCollapsed}
              onMenuClick={menuClick}
            />
          </nav>
          <div className={toggle()}>
            <div className={toggleContent()} onClick={toggleSidebar}>
              <i
                className={`pi ${
                  isCollapsed ? "pi-arrow-right" : "pi-arrow-left"
                }`}
              />
              {!isCollapsed && <span>Ocultar barra</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className={mobileContainer()}>
        {isOpenMenuMobile && (
          <div className={content()}>
            <nav className={nav()} aria-labelledby="nav-vertical">
              <MenuListVertical
                menu={sampleMenuData}
                isCollapsed={!isOpenMenuMobile}
                onMenuClick={menuClick}
              />
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default SideMenu;
