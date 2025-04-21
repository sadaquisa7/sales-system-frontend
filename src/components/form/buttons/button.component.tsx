"use client";

import { Button } from "primereact/button";
import { ButtonFormProps } from "@/interfaces/components/form/buttons/button.interface";

const propsDefault: Partial<ButtonFormProps> = {
  badge: null,
  badgeClassName: null,
  children: null,
  disabled: false,
  icon: null,
  iconPos: "left",
  label: null,
  link: false,
  loading: false,
  loadingIcon: null,
  outlined: false,
  plain: false,
  pt: {},
  ptOptions: {},
  raised: false,
  rounded: false,
  size: "small",
  text: false,
  tooltipOptions: {},
  unstyled: false,
  visible: true,
  type: "button",
};

const ButtonFormComponent: React.FC<ButtonFormProps> = (propsCurrent) => {
  const props = { ...propsDefault, ...propsCurrent };
  if (!props.visible) return null;
  return (
    <Button
      badge={props.badge!}
      badgeClassName={props.badgeClassName!}
      disabled={props.disabled}
      icon={props.icon}
      iconPos={props.iconPos}
      label={props.label!}
      link={props.link}
      loading={props.loading}
      loadingIcon={props.loadingIcon}
      outlined={props.outlined}
      plain={props.plain}
      pt={props.pt!}
      ptOptions={props.ptOptions!}
      raised={props.raised}
      rounded={props.rounded}
      severity={props.severity}
      size={props.size}
      text={props.text}
      tooltip={props.tooltip}
      tooltipOptions={props.tooltipOptions!}
      unstyled={props.unstyled}
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    />
  );
};

export default ButtonFormComponent;
