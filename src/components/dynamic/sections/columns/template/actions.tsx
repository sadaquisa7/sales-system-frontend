import Link from "next/link";
import {
  ColumnFormProps,
  Action,
} from "@interfaces/components/form/tables/column.interface";
import { SEVERITY } from "@/interfaces/components/form/buttons/button.interface";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { ActionHandlers } from "@interfaces/components/dynamic/sections/list.interface";

import ButtonFormComponent from "@components/form/buttons/button.component";
import InputSwitchFormComponent from "@components/form/inputs/inputSwitch.component";

const buildRedirectPath = (template: string, params: string[], data: any) => {
  let path = template;
  params.forEach((param) => {
    path = path.replace(`{${param}}`, data[param]);
  });
  return path;
};
export const ColumnTemplateActions = (
  props: ColumnFormProps,
  rowData: any,
  actionHandlers: ActionHandlers
): React.ReactElement => {
  const { actions = [] } = props;
  const { executeLoading, setShowConfirm, setPendingService } = actionHandlers;
  const handlerAction = async (service?: () => Promise<ApiResponse>) => {
    if (typeof service === "function") {
      executeLoading(true);
      executeLoading(false, await service());
    }
  };

  const renderRedirectAction = (action: Action, index: number) => {
    const { icon = "pi pi-wrench", redirect, params } = action;
    const href = buildRedirectPath(redirect ?? "", params || [], rowData);
    return (
      <Link href={href} key={index}>
        <ButtonFormComponent icon={icon} />
      </Link>
    );
  };

  const renderStateAction = (action: Action, index: number) => {
    const { columnKey = "state", columnKeyId = "id", service } = action;
    const stateValue = rowData[columnKey];
    const idValue = rowData[columnKeyId];
    const value = stateValue === 1;

    if (!(columnKey in rowData)) {
      return (
        <span key={index}>
          La clave <b>{columnKey}</b> no existe
        </span>
      );
    }

    const handlerActionState = async () => {
      if (typeof service === "function") {
        await handlerAction(() => service(idValue, value ? 0 : 1));
      }
    };

    return (
      <InputSwitchFormComponent
        value={value}
        id={`input-switch-id-${index}`}
        name={`input-switch-name-${index}`}
        key={index}
        onChange={handlerActionState}
      />
    );
  };

  const renderDeleteAction = (action: Action, index: number) => {
    let { icon = "pi pi-wrench" } = action;
    const { columnKeyId = "id", service } = action;
    const idValue = rowData[columnKeyId];
    let severity: SEVERITY | undefined;
    if (action.type === "delete") {
      icon = "pi pi-trash";
      severity = "danger";
    }
    const handlerDelete = () => {
      if (typeof service === "function") {
        const serviceWithId = service as (
          id: number
        ) => Promise<ApiResponse<any>>;
        setPendingService(() => () => serviceWithId(idValue));
        setShowConfirm(true);
      }
    };
    return (
      <ButtonFormComponent
        key={index}
        icon={icon}
        severity={severity}
        onClick={handlerDelete}
      />
    );
  };

  const renderAction = (action: Action, index: number) => {
    switch (action.type) {
      case "redirect":
        return renderRedirectAction(action, index);
      case "state":
        return renderStateAction(action, index);
      case "delete":
        return renderDeleteAction(action, index);
      default:
        return <></>;
    }
  };

  if (actions.length === 0) return <></>;

  return (
    <div className="flex justify-center items-center gap-2">
      {actions.map((action, index) => renderAction(action, index))}
    </div>
  );
};
