import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { authService } from "@/services/auth/auth.service";

export const ConfigForm: FormConfig = {
  info: {},
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
};
