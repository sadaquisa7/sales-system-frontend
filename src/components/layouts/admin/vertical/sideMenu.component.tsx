"use client";

import { useState } from "react";
import MenuListVertical from "./list.component";
import { useRouter } from "next/navigation";
import {
  MenuItem,
  MenuItemRoute,
} from "@interfaces/components/layouts/admin/vertical/item.interface";
import { sideMenuVariant } from "./variants/sideMenu.variants";
import { useIsOpenMenuMobile } from "@contexts/menu/isOpenMobile";
import { useAuth } from "@contexts/auth/auth.context";

const SideMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTransitionEnd, setIsTransitionEnd] = useState(true);
  const router = useRouter();
  const { isOpenMenuMobile } = useIsOpenMenuMobile();
  const { menus: sampleMenuData } = useAuth();
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
    setIsTransitionEnd(false);
  };

  // Handle menu item clicks with routing
  const menuClick = (item: MenuItem) => {
    if (item.route) {
      const { name, params }: MenuItemRoute = item.route;
      if (name) {
        // In Next.js, we use router.push for navigation
        // You'll need to adapt this based on your routing setup
        router.push(`${name}${params ? `/${params}` : ""}`);
        setActiveItemId(item.id);
      } else if (item.children) {
        setActiveItemId((prev) => (prev === item.id ? null : item.id));
      }
    }
  };

  // Handle transition end
  const onTransitionEnd = () => {
    setIsTransitionEnd(true);
  };

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
              activeItemId={activeItemId}
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
                activeItemId={activeItemId}
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
