"use client";
import { useState, useMemo } from "react";
import ConfirmDialogComponent from "@components/form/modals/confirmDialog.component";

interface Props {
  visible?: boolean;
  header?: string;
  message?: string;
  icon?: string;
  onAccept?: () => void;
  onReject?: () => void;
}

const propsDefault: Props = {
  header: "Confirmación",
  message: "¿Estás seguro que quieres eliminar este registro?",
  icon: "pi pi-exclamation-triangle",
  visible: false,
};

export default function ConfirmationModal(propsCurrent: Props) {
  const [visible, setVisible] = useState(propsCurrent.visible);

  const props = useMemo(() => {
    return {
      ...propsDefault,
      ...propsCurrent,
      visible: propsCurrent.visible || visible,
    };
  }, [propsCurrent, visible]);

  const accept = () => {
    props.onAccept?.();
  };

  const reject = () => {
    props.onReject?.();
  };

  return (
    <ConfirmDialogComponent
      visible={props.visible}
      header={props.header}
      message={props.message}
      icon={props.icon}
      onHide={() => setVisible(false)}
      accept={accept}
      reject={reject}
    />
  );
}
