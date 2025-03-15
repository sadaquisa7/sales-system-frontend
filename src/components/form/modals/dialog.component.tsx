"use client";

import { Dialog } from "primereact/dialog";
import { DialogComponentProps } from "@interfaces/components/form/modals/dialog.interface";
import { useState, useEffect } from "react";

const propsDefault: DialogComponentProps = {
  appendTo: "self",
  baseZIndex: 0,
  blockScroll: false,
  children: null,
  closable: true,
  closeIcon: null,
  closeOnEscape: true,
  content: null,
  dismissableMask: false,
  draggable: false,
  focusOnShow: true,
  footer: null,
  header: null,
  icons: null,
  id: "dialog-id",
  keepInViewport: true,
  maximizable: false,
  maximized: false,
  maximizeIcon: null,
  minimizeIcon: null,
  minX: 0,
  minY: 0,
  modal: true,
  position: "center",
  resizable: true,
  rtl: false,
  showHeader: true,
  unstyled: false,
  visible: false,
};

const DialogComponent: React.FC<DialogComponentProps> = (propsCurrent) => {
  const props = { ...propsDefault, ...propsCurrent };
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  if (!visible) return null;

  return (
    <Dialog
      appendTo={props.appendTo}
      ariaCloseIconLabel={props.ariaCloseIconLabel}
      baseZIndex={props.baseZIndex}
      blockScroll={props.blockScroll}
      breakpoints={props.breakpoints}
      className={props.className}
      closable={props.closable}
      closeIcon={props.closeIcon}
      closeOnEscape={props.closeOnEscape}
      content={props.content}
      contentClassName={props.contentClassName}
      contentStyle={props.contentStyle}
      dismissableMask={props.dismissableMask}
      draggable={props.draggable}
      focusOnShow={props.focusOnShow}
      footer={props.footer}
      header={props.header}
      headerClassName={props.headerClassName}
      headerStyle={props.headerStyle}
      icons={props.icons}
      id={props.id}
      keepInViewport={props.keepInViewport}
      maskClassName={props.maskClassName}
      maskStyle={props.maskStyle}
      maximizable={props.maximizable}
      maximized={props.maximized}
      maximizeIcon={props.maximizeIcon}
      minimizeIcon={props.minimizeIcon}
      minX={props.minX}
      minY={props.minY}
      modal={props.modal}
      position={props.position}
      pt={props.pt}
      ptOptions={props.ptOptions}
      resizable={props.resizable}
      rtl={props.rtl}
      showHeader={props.showHeader}
      style={{ ...props.style, width: props.style?.width || "50vw" }}
      transitionOptions={props.transitionOptions}
      unstyled={props.unstyled}
      visible={visible}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      {props.children}
    </Dialog>
  );
};

export default DialogComponent;
