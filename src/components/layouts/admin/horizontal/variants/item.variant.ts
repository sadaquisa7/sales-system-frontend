import { tv } from "tailwind-variants";

export const menuItemVariant = tv({
  slots: {
    base: "block lg:flex items-center hover:text-slate-400 relative cursor-pointer py-2 px-3 transition-colors",
    iconWrapper: "flex justify-center items-center w-6 h-6",
    divider:
      "hidden lg:block lg:my-0.5 border-t border-gray-100 dark:border-slate-700",
  },
  variants: {
    selected: {
      true: {
        base: "text-slate-400", // Solo afecta al slot 'base' cuando selected es true
      },
      false: {
        base: "", // No agrega clases adicionales cuando selected es false
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
