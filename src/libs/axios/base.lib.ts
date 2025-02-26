import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { ApiResponse, ErrorResponse } from "@interfaces/axios/axio.interface";

// Función reutilizable para manejar errores
const handleError = <T>(error: AxiosError<ErrorResponse>): ApiResponse<T> => {
  if (error.response) {
    return {
      status: false,
      message:
        error.response.data?.message || "Error en la respuesta del servidor",
      data: undefined, // Explícitamente undefined
      code: error.response.status,
    };
  } else if (error.request) {
    return {
      status: false,
      message: "No se recibió respuesta del servidor",
      data: undefined,
      code: "REQUEST_TIMEOUT",
    };
  } else {
    return {
      status: false,
      message: error.message,
      data: undefined,
      code: "UNKNOWN_ERROR",
    };
  }
};

// Función para crear los métodos HTTP
export const createHttpClient = (api: AxiosInstance) => ({
  // GET
  get: async <Data, Params = unknown>(
    url: string,
    params?: Record<string, Params>
  ): Promise<ApiResponse<Data>> => {
    try {
      const response: AxiosResponse<Data> = await api.get(url, { params });
      return response.data as ApiResponse<Data>;
    } catch (error) {
      return handleError<Data>(error as AxiosError<ErrorResponse>);
    }
  },

  // POST
  post: async <Body, Data, Params = unknown>(
    url: string,
    body: Body,
    params?: Record<string, Params>
  ): Promise<ApiResponse<Data>> => {
    try {
      const response: AxiosResponse<Data> = await api.post(url, body, {
        params,
      });
      return response.data as ApiResponse<Data>;
    } catch (error) {
      return handleError<Data>(error as AxiosError<ErrorResponse>);
    }
  },

  // PUT
  put: async <Body, Data, Params = unknown>(
    url: string,
    body: Body,
    params?: Record<string, Params>
  ): Promise<ApiResponse<Data>> => {
    try {
      const response: AxiosResponse<Data> = await api.put(url, body, {
        params,
      });
      return response.data as ApiResponse<Data>;
    } catch (error) {
      return handleError<Data>(error as AxiosError<ErrorResponse>);
    }
  },

  // DELETE
  delete: async <Data, Params = unknown>(
    url: string,
    params?: Record<string, Params>
  ): Promise<ApiResponse<Data>> => {
    try {
      const response: AxiosResponse<Data> = await api.delete(url, {
        params,
      });
      return response.data as ApiResponse<Data>;
    } catch (error) {
      return handleError<Data>(error as AxiosError<ErrorResponse>);
    }
  },

  // PATCH
  patch: async <Body, Data, Params = unknown>(
    url: string,
    body: Body,
    params?: Record<string, Params>
  ): Promise<ApiResponse<Data>> => {
    try {
      const response: AxiosResponse<Data> = await api.patch(url, body, {
        params,
      });
      return response.data as ApiResponse<Data>;
    } catch (error) {
      return handleError<Data>(error as AxiosError<ErrorResponse>);
    }
  },
});
