// tailwind.variants.ts
import { tv } from "tailwind-variants";

export const menuItemVariant = tv({
  // Define slots for different parts of the component
  slots: {
    base: "rounded-lg cursor-pointer flex items-center justify-between p-2",
    content: "flex gap-2 items-center",
    chevron: "", // Base styling for chevron can be empty or customized
    submenu: "ml-6 pl-3 border-l-[1px] border-gray-joinnus-1",
  },

  // Variants that affect specific slots
  variants: {
    hasChildren: {
      true: {
        base: "", // No additional base styles needed here
      },
      false: {
        base: "",
      },
    },
    isActive: {
      true: {
        base: "bg-green-joinnus-2", // Only affects the base slot
      },
      false: {
        base: "hover:bg-green-joinnus-2",
      },
    },
    isExpanded: {
      true: {
        base: "bg-white-joinnus-2",
      },
      false: {
        base: "hover:bg-white-joinnus-2",
      },
    },
    isCollapsed: {
      true: {
        base: "",
      },
      false: {
        base: "",
      },
    },
  },

  // Compound variants for combinations
  compoundVariants: [
    {
      hasChildren: true,
      isExpanded: true,
      class: {
        base: "bg-white-joinnus-2",
      },
    },
    {
      hasChildren: true,
      isExpanded: false,
      class: {
        base: "hover:bg-white-joinnus-2",
      },
    },
    {
      hasChildren: false,
      isActive: true,
      class: {
        base: "bg-green-joinnus-2",
      },
    },
    {
      hasChildren: false,
      isActive: false,
      class: {
        base: "hover:bg-green-joinnus-2",
      },
    },
  ],

  // Default variants
  defaultVariants: {
    hasChildren: false,
    isActive: false,
    isExpanded: false,
  },
});
