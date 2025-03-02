import { ApiResponse } from "@interfaces/axios/axio.interface";

export const createHttpClient = (
  baseUrl: string,
  baseHeaders: HeadersInit = {}
) => {
  // Función interna para manejar errores
  const handleError = async <T>(
    response: Response
  ): Promise<ApiResponse<T>> => {
    let errorMessage = "Error desconocido";
    let errorData: { message?: string };

    try {
      errorData = await response.json();
      errorMessage = errorData?.message || errorMessage;
    } catch (e) {
      console.log("error base fetch ==>>", e);
      errorMessage = "No se pudo interpretar la respuesta del servidor";
    }

    return {
      status: false,
      message: errorMessage,
      data: undefined,
      code: response.status,
    };
  };

  // Función genérica para hacer peticiones HTTP con `fetch`
  const request = async <Body, Data>(
    method: string,
    url: string,
    body?: Body,
    params?: Record<string, unknown>,
    customHeaders: HeadersInit = {}
  ): Promise<ApiResponse<Data>> => {
    try {
      // Construir la URL con parámetros si existen
      const queryString = params
        ? new URLSearchParams(
            params as
              | string
              | Record<string, string>
              | string[][]
              | URLSearchParams
          ).toString()
        : "";
      const fullUrl = `${baseUrl}${url}${queryString ? `?${queryString}` : ""}`;

      // Configurar headers con `Content-Type` por defecto
      const headers: HeadersInit = {
        "Content-Type": "application/json", // Por defecto
        ...baseHeaders,
        ...customHeaders,
      };

      // Configurar la petición
      const options: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(fullUrl, options);

      // Si la respuesta no es exitosa, manejar el error
      if (!response.ok) return handleError<Data>(response);

      // Procesar la respuesta
      const responseData: ApiResponse<Data> = await response.json();
      return responseData;
    } catch (error) {
      return {
        status: false,
        message: (error as Error).message || "Error inesperado",
        data: undefined,
        code: "NETWORK_ERROR",
      };
    }
  };

  // Métodos HTTP disponibles
  return {
    get: <Data>(
      url: string,
      params?: Record<string, unknown>,
      headers?: HeadersInit
    ) => request<undefined, Data>("GET", url, undefined, params, headers),

    post: <Body, Data>(
      url: string,
      body: Body,
      params?: Record<string, unknown>,
      headers?: HeadersInit
    ) => request<Body, Data>("POST", url, body, params, headers),

    put: <Body, Data>(
      url: string,
      body: Body,
      params?: Record<string, unknown>,
      headers?: HeadersInit
    ) => request<Body, Data>("PUT", url, body, params, headers),

    delete: <Data>(
      url: string,
      params?: Record<string, unknown>,
      headers?: HeadersInit
    ) => request<undefined, Data>("DELETE", url, undefined, params, headers),

    patch: <Body, Data>(
      url: string,
      body: Body,
      params?: Record<string, unknown>,
      headers?: HeadersInit
    ) => request<Body, Data>("PATCH", url, body, params, headers),
  };
};
