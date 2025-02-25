"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/login/login.validation";
import { ConfigForm } from "@configs/forms/login/login.config";

export default function LoginComponent() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <FormComponent<NewForm> config={ConfigForm} schema={FormSchema} />
      </div>
    </div>
  );
}
