"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/login/login.validation";
import { ConfigForm } from "@configs/forms/login/login.config";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { LoginResponse } from "@/interfaces/services/auth/login.interface";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const router = useRouter();
  const NAME_SESSION =
    process.env.NEXT_PUBLIC_COOKIE_NAME_SESSION || "session_token";
  const onSuccess = (response: ApiResponse<LoginResponse>) => {
    const { data } = response;
    if (data) {
      const { access_token, expires_at } = data;
      Cookies.set(NAME_SESSION, access_token, { expires: expires_at });
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
