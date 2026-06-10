import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  DM_Serif_Display,
  Lato,
  Libre_Baskerville,
  Nunito_Sans,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";
import { DemoShell } from "@/components/demo/DemoShell";
import { hotelConfig } from "@/hotel.config";
import { ThemePresetManager } from "@/lib/design/ThemePresetManager";
import { generateThemeStylesheet } from "@/lib/themes";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const fontVariables = [
  lato.variable,
  playfair.variable,
  cormorant.variable,
  sourceSans.variable,
  libreBaskerville.variable,
  nunitoSans.variable,
  dmSans.variable,
  dmSerif.variable,
].join(" ");

/** Read from config on every render so theme changes hot-reload in dev. */
const activeTheme = hotelConfig.theme;
const defaultNavStyle =
  ThemePresetManager.getDefaultFromConfig().customization.navigationStyle;

export const metadata: Metadata = {
  title: "YOUR BUSINESS NAME | Premium Hotel Website Preview",
  description: hotelConfig.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={activeTheme}
      data-nav-style={defaultNavStyle}
      className={`${fontVariables} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <style
          id="hotel-theme-variables"
          dangerouslySetInnerHTML={{ __html: generateThemeStylesheet() }}
        />
      </head>
      <body className="min-h-screen">
        <DemoShell>{children}</DemoShell>
      </body>
    </html>
  );
}
