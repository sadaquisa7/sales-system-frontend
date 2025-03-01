"use client";
import { MegaMenu } from "primereact/megamenu";
import { MegaMenuComponentProps } from "@interfaces/components/menus/mega/megaMenu.interface";

const propsDefault: Partial<MegaMenuComponentProps> = {
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
  breakpoint: null,
  menuIcon: null,
  orientation: "horizontal",
  scrollHeight: "400px",
  submenuIcon: null,
  tabIndex: null,
};

const MegaMenuComponent: React.FC<MegaMenuComponentProps> = (propsCurrent) => {
  const props = { ...propsDefault, ...propsCurrent };
  return (
    <>
      <MegaMenu
        model={props.items ?? undefined}
        pt={props.pt ?? undefined}
        ptOptions={props.ptOptions ?? undefined}
        unstyled={props.unstyled}
        className={props.className}
        breakpoint={props.breakpoint ?? undefined}
        end={props.end}
        menuIcon={props.menuIcon ?? undefined}
        orientation={props.orientation}
        scrollHeight={props.scrollHeight}
        start={props.start}
        submenuIcon={props.submenuIcon ?? undefined}
        tabIndex={props.tabIndex ?? undefined}
      >
        {props.children}
      </MegaMenu>
      {props.endItems?.length ? (
        <MegaMenu
          model={props.endItems}
          orientation="vertical"
          className="absolute right-0 top-[4.5rem]"
        />
      ) : null}
    </>
  );
};

export default MegaMenuComponent;
