import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { authService } from "@/services/auth/auth.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Iniciar Sesión",
      className: "text-center text-2xl font-bold tracking-tight text-gray-900",
    },
    service: authService.login,
  },
  sections: {
    items: {
      login: {
        className: {
          items: "gap-4 grid",
        },
        fields: [
          {
            type: "input_text",
            name: "email",
            label: "Correo",
            props: {
              required: true,
            },
          },
          {
            type: "input_password",
            name: "password",
            label: "Contraseña",
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
    className: "mt-5",
    items: [
      {
        label: "Iniciar Sesión",
        action: "button",
        props: {
          type: "submit",
          className: "w-full",
        },
      },
    ],
  },
};
