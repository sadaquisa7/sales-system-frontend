// tailwind.variants.ts
import { tv } from "tailwind-variants";

// Sidebar variants with slots
export const sideMenuVariant = tv({
  slots: {
    desktopContainer:
      "hidden lg:block break-words bg-white-joinnus-1 transition-all duration-300 ease-in-out",
    mobileContainer:
      "block lg:hidden absolute top-16 w-full z-[100] h-screen-navbar break-words bg-white-joinnus-1",
    content: "flex grow flex-col h-screen-navbar text-blue-joinnus-1 text-sm",
    nav: "flex flex-col pt-3 overflow-y-auto px-3",
    toggle: "mt-auto p-3",
    toggleContent: "flex items-center gap-2 cursor-pointer",
  },
  variants: {
    isCollapsed: {
      true: {
        desktopContainer: "w-16 text-nowrap",
        content: "overflow-x-hidden",
      },
      false: {
        desktopContainer: "w-72",
        content: "",
      },
    },
    isTransitioning: {
      true: {
        desktopContainer: "text-nowrap",
        content: "overflow-x-hidden",
      },
      false: {
        desktopContainer: "",
        content: "",
      },
    },
    isOpenMobile: {
      true: {
        mobileContainer: "flex flex-col",
      },
      false: {
        mobileContainer: "hidden",
      },
    },
  },
  defaultVariants: {
    isCollapsed: false,
    isTransitioning: false,
    isOpenMobile: false,
  },
});
