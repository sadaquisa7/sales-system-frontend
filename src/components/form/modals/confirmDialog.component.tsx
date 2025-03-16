"use client";

import { ConfirmDialog } from "primereact/confirmdialog";
import { ConfirmDialogComponentProps } from "@interfaces/components/form/modals/confirmDialog.interface";
import { useState, useEffect } from "react";

const propsDefault: ConfirmDialogComponentProps = {
  accept: () => {},
  acceptLabel: "Yes",
  appendTo: "self",
  baseZIndex: 0,
  blockScroll: false,
  children: null,
  closable: true,
  closeOnEscape: true,
  defaultFocus: "accept",
  dismissableMask: false,
  draggable: true,
  focusOnShow: true,
  footer: null,
  icon: null,
  icons: null,
  id: "confirm-dialog-id",
  keepInViewport: true,
  maximizable: false,
  maximized: false,
  maximizeIcon: null,
  message: null,
  minimizeIcon: null,
  minX: 0,
  minY: 0,
  modal: true,
  position: "center",
  reject: () => {},
  rejectIcon: null,
  rejectLabel: "No",
  resizable: true,
  rtl: false,
  showHeader: true,
  transitionOptions: null,
  unstyled: false,
  visible: false,
  onHide: () => {},
  onShow: () => {},
};

const ConfirmDialogComponent: React.FC<ConfirmDialogComponentProps> = (
  propsCurrent
) => {
  const props = { ...propsDefault, ...propsCurrent };
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  if (!visible) return null;

  return (
    <ConfirmDialog
      accept={props.accept}
      acceptClassName={props.acceptClassName}
      acceptIcon={props.acceptIcon}
      acceptLabel={props.acceptLabel}
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
      defaultFocus={props.defaultFocus}
      dismissableMask={props.dismissableMask}
      draggable={props.draggable}
      focusOnShow={props.focusOnShow}
      footer={props.footer}
      group={props.group}
      header={props.header}
      headerClassName={props.headerClassName}
      headerStyle={props.headerStyle}
      icon={props.icon}
      icons={props.icons}
      id={props.id}
      keepInViewport={props.keepInViewport}
      maskClassName={props.maskClassName}
      maskStyle={props.maskStyle}
      maximizable={props.maximizable}
      maximized={props.maximized}
      maximizeIcon={props.maximizeIcon}
      message={props.message}
      minimizeIcon={props.minimizeIcon}
      minX={props.minX}
      minY={props.minY}
      modal={props.modal}
      position={props.position}
      reject={props.reject}
      rejectClassName={props.rejectClassName}
      rejectIcon={props.rejectIcon}
      rejectLabel={props.rejectLabel}
      resizable={props.resizable}
      rtl={props.rtl}
      showHeader={props.showHeader}
      style={props.style}
      tagKey={props.tagKey}
      transitionOptions={props.transitionOptions}
      unstyled={props.unstyled}
      visible={visible}
      onHide={props.onHide}
      onShow={props.onShow}
    >
      {props.children}
    </ConfirmDialog>
  );
};

export default ConfirmDialogComponent;
