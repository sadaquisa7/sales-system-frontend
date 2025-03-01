import { tv } from "tailwind-variants";

export const menuListVariant = tv({
  slots: {
    wrapper:
      "relative h-full flex items-center justify-center capitalize cursor-pointer",
    trigger: "hover:text-slate-400 flex items-center justify-center gap-2",
    menuList:
      "absolute top-16 left-0 rounded-br-lg rounded-bl-lg min-w-full bg-black transition-all duration-300 ease-in-out transform origin-top-right",
  },
  variants: {
    isOpen: {
      true: {
        menuList: "scale-y-100 opacity-100",
        trigger: "text-slate-400",
      },
      false: {
        menuList: "scale-y-0 opacity-0",
      },
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});
