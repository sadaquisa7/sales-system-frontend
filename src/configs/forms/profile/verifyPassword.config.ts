import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { authService } from "@/services/auth/auth.service";
import { ApiResponse } from "@interfaces/axios/axio.interface";

export const ConfigForm = <U = undefined>(
  onCancel: (formData: any) => void,
  onSuccess: (response: ApiResponse<U>) => void
): FormConfig => ({
  info: {
    onSuccess: onSuccess,
    service: authService.verifyPassword,
  },
  sections: {
    items: {
      login: {
        className: {
          items: "gap-4 grid",
        },
        fields: [
          {
            type: "input_password",
            name: "password",
            label: "Contraseña Actual",
            props: {
              required: true,
              toggleMask: true,
              feedback: false,
            },
          },
        ],
      },
    },
  },
  buttons: {
    className: "mt-5 gap-4 flex justify-end",
    items: [
      {
        label: "Cancelar",
        action: "button",
        onClick: onCancel,
        props: {
          icon: "pi pi-times",
          className: "p-button-text",
        },
      },
      {
        label: "Verificar",
        action: "button",
        props: {
          className: "",
          type: "submit",
          icon: "pi pi-check",
        },
      },
    ],
  },
});
