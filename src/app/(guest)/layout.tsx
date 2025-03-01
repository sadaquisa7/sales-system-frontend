import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest",
  description: "Generated Guest",
};

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
