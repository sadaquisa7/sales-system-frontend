import ErrorDisplay from "./errorDisplay";
import { ErrorPageProps } from "@/interfaces/error/errorPage.interface";
import { errorData } from "@constants/errorPage.constants";
export type ReadonlyErrorPageProps = Readonly<ErrorPageProps>;

export default function ErrorPageComponent({ status }: ReadonlyErrorPageProps) {
  const information = errorData[status] || errorData[404];
  return <ErrorDisplay information={information} minHeight="min-h-screen" />;
}
