import { DemoShell } from "@/components/demo/DemoShell";
import { hotelConfig } from "@/hotel.config";

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DemoShell previewMode={hotelConfig.previewMode}>{children}</DemoShell>;
}
