"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/login/login.validation";
import { ConfigForm } from "@configs/forms/login/login.config";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { LoginResponse } from "@/interfaces/services/auth/login.interface";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const router = useRouter();
  const onSuccess = (response: ApiResponse<LoginResponse>) => {
    if (response.status) {
      router.push("/");
    }
  };
  if (ConfigForm.info) {
    ConfigForm.info.onSuccess = onSuccess;
  }
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <FormComponent<NewForm, LoginResponse>
          config={ConfigForm}
          schema={FormSchema}
        />
      </div>
    </div>
  );
}
