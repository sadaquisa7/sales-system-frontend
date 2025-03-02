"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/login/login.validation";
import { ConfigForm } from "@configs/forms/login/login.config";
import { loginService } from "@/services/auth/auth.service";
import { useToast } from "@contexts/toast/toast.context";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { useLoading } from "@contexts/loading/loading.context";
import { LoginResponse } from "@interfaces/services/login/login.interface";
import Cookies from "js-cookie";
export default function LoginComponent() {
  const { success, error } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const login = async (form: NewForm) => {
    showLoading();
    try {
      const response: ApiResponse<LoginResponse> = await loginService.login(
        form
      );
      const { message, status, data } = response;
      if (status && data) {
        const { access_token, expires_at } = data;
        Cookies.set("session_token", access_token, { expires: expires_at });
        success(message);
      } else {
        error(message);
      }
    } catch (e) {
      console.error("Error calling service:", e);
      error("An unexpected error occurred");
    } finally {
      hideLoading();
    }
  };

  ConfigForm.buttons.items.forEach((button) => {
    button.onClick = login;
  });

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <FormComponent<NewForm> config={ConfigForm} schema={FormSchema} />
      </div>
    </div>
  );
}
