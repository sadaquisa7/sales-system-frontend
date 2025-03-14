import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { User } from "@interfaces/auth/auth.interface";

export const ConfigForm = (user: User | null): FormConfig => ({
  info: {
    title: {
      value: "Perfil",
      className:
        "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    onSuccess: (response) => console.log("Success:", response),
    onError: (error) => console.log("Error:", error),
  },
  sections: {
    config: {
      className: "space-y-5",
    },
    items: {
      personalInfo: {
        title: {
          value: "Información Personal",
          className: "text-xl font-semibold p-4 bg-gray-300 rounded-t-xl",
        },
        className: {
          items: "gap-4 grid lg:grid-cols-12 border-t-2 p-4 border-gray-300",
          container: "border-2 border-gray-300 rounded-xl",
        },
        fields: [
          {
            type: "input_text",
            name: "email",
            label: "Correo",
            defaultValue: user?.email,
            className: "col-span-12",
            props: {
              required: false,
              readOnly: true,
            },
          },
          {
            type: "input_text",
            name: "first_name",
            label: "Nombres",
            className: "lg:col-span-6 col-span-12",
            defaultValue: user?.first_name,
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "last_name",
            label: "Apellidos",
            defaultValue: user?.last_name,
            className: "lg:col-span-6 col-span-12",
            props: {
              required: true,
            },
          },
        ],
      },
      passwordSection: {
        title: {
          value: "Seguridad",
          className: "text-xl font-semibold p-4 bg-gray-300 rounded-t-xl",
        },
        className: {
          items: "gap-4 grid lg:grid-cols-2 border-t-2 p-4 border-gray-300",
          container: "border-2 border-gray-300 rounded-xl",
        },
        fields: [
          {
            type: "input_password",
            name: "password",
            label: "Nueva Contraseña",
            props: {
              toggleMask: true,
            },
          },
          {
            type: "input_password",
            name: "password_confirm", // Changed name to avoid duplicate
            label: "Repetir Nueva Contraseña",
            props: {
              toggleMask: true,
            },
          },
        ],
      },
    },
  },
  buttons: {
    className: "mt-5 flex justify-end",
    items: [
      {
        label: "Actualizar",
        action: "button",
        props: {
          type: "submit",
          className: "",
        },
      },
    ],
  },
});
