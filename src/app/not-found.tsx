import type { Metadata } from "next";
import ErrorPageComponent from "@components/error/errorPage";
import { errorHead } from "@constants/errorPage.constants";

export async function generateMetadata(): Promise<Metadata> {
  const errorInfo = errorHead[404];
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

export default function NotFound() {
  return <ErrorPageComponent status={404} />;
}
