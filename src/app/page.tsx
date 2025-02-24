"use client";
import FormComponent from "@components/dynamic/forms/form";
import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
interface FormData {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
}

export default function Home() {
  const formConfig: FormConfig = {
    info: {
      title: {
        value: "Registro de Usuario",
        className: "text-3xl font-semibold text-blue-600 mb-6",
      },
      service: "https://api.example.com/register",
    },
    sections: [
      {
        className: "gap-4 grid grid-cols-3",
        fields: [
          {
            type: "input_text",
            name: "firstName",
            label: "Nombre",
            defaultValue: "Sandro",
            props: {
              placeholder: "Ingrese su nombre",
              required: true,
            },
          },
          {
            type: "input_text",
            name: "lastName",
            label: "Apellido",
            props: {
              placeholder: "Ingrese su apellido",
            },
          },
          {
            type: "date",
            name: "birthDate",
            label: "Fecha de Nacimiento",
            props: {
              maxDate: new Date(),
            },
          },
        ],
      },
    ],
    buttons: {
      className: "flex justify-center items-center gap-2",
      items: [
        {
          label: "Guardar",
          action: "button",
          props: {
            type: "submit",
          },
        },
        {
          label: "Vista Previa",
          action: "redirect",
          url: "/preview",
        },
        {
          label: "Cancelar",
          action: "button",
          onClick: (formData: FormData) =>
            console.log("Cancelado con datos:", formData),
        },
      ],
    },
  };

  return (
    <div>
      <FormComponent<FormData> config={formConfig} />
    </div>
  );
}
