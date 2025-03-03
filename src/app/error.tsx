"use client";

import { useEffect } from "react";
import type { Metadata } from "next";
import ErrorPageComponent from "@components/error/errorPage";
import { errorHead } from "@constants/errorPage.constants";

export default function GlobalError({ error }: { error: Error }) {
  // Intentar extraer un código de estado desde el mensaje del error
  const statusCode = error?.message?.match(/\d+/)?.[0];
  const status = statusCode ? parseInt(statusCode, 10) : 500; // Si no hay código, usar 500

  useEffect(() => {
    console.error("Error capturado:", error);
  }, [error]);

  return <ErrorPageComponent status={status} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const status = 500; // No podemos obtener el código dinámicamente aquí
  const errorInfo = errorHead[status] || errorHead[500];

  return {
    title: errorInfo.title,
    description: errorInfo.description,
    robots: "noindex",
    openGraph: {
      title: errorInfo.title,
      description: errorInfo.description,
    },
  };
}
