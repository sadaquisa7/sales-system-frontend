import {
  ErrorData,
  ErrorHead,
  Head,
} from "@/interfaces/error/errorPage.interface";

export const errorData: ErrorData = {
  400: {
    img: "/img/error/error-404.svg",
    status: 400,
    message: "¡Ocurrió un error en la petición!",
    description: "No te preocupes, te regresaremos a la principal.",
  },
  403: {
    img: "/img/error/error-404.svg",
    status: 403,
    message: "¡No estás autorizado para acceder a este recurso!",
    description: "No te preocupes, te regresaremos a la principal.",
  },
  404: {
    img: "/img/error/error-404.svg",
    status: 404,
    message: "¡Página no encontrada!",
    description: "No te preocupes, te regresaremos a la principal.",
  },
  500: {
    img: "/img/error/error-500.svg",
    status: 500,
    message: "Parece que algo salió mal...",
    description:
      "Intenta de nuevo en unos minutos. Si el problema continúa, contacta al área de TI.",
  },
  502: {
    img: "/img/error/error-502.svg",
    status: 502,
    message: "Tenemos un problema...",
    description: "Puedes volver un paso atrás e intentar de nuevo más tarde.",
  },
  503: {
    img: "/img/error/error-503.svg",
    status: 503,
    message: "Estamos trabajando.",
    description: "Estamos realizando mejoras. Intenta de nuevo más tarde.",
  },
};

export const errorHead: ErrorHead = {
  400: {
    title: "400 - Solicitud Incorrecta",
    description:
      "Ocurrió un error en la solicitud. Por favor, revisa los datos enviados e intenta de nuevo.",
  },
  401: {
    title: "401 - No Autenticado",
    description:
      "No estás autenticado. Por favor, inicia sesión para acceder a esta página.",
  },
  403: {
    title: "403 - No Autorizado",
    description:
      "No tienes autorización para acceder a esta página. Contacta al administrador si crees que esto es un error.",
  },
  404: {
    title: "404 - Página No Encontrada",
    description:
      "Lo sentimos, la página que estás buscando no existe. Revisa la URL o regresa al inicio.",
  },
  500: {
    title: "500 - Algo Salió Mal",
    description:
      "Algo salió mal en el servidor. Estamos trabajando para solucionarlo lo antes posible.",
  },
  502: {
    title: "502 - Problema en el Servidor",
    description:
      "Tenemos un pequeño problema en el servidor. Por favor, intenta de nuevo más tarde.",
  },
  503: {
    title: "503 - En Mantenimiento",
    description:
      "Estamos en mantenimiento. Volveremos pronto, ¡gracias por tu paciencia!",
  },
};

export const defaultErrorHead: Head = {
  title: "Error en el Cliente",
  description:
    "Ocurrió un error inesperado en el cliente. Por favor, intenta de nuevo.",
};
