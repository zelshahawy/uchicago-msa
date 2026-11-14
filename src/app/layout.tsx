import type { Metadata, Viewport } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/aref-ruqaa/400.css";
import "@fontsource/aref-ruqaa/700.css";
import "./globals.css";

const title = "UChicago MSA — Faith, friendship, and a place to belong";
const description = "Welcome to the Muslim Students Association at the University of Chicago. A community rooted in faith, connected by friendship, and open to you.";

export const metadata: Metadata = {
  metadataBase: new URL("https://uchicago-msa-community.modest-rose-5722.chatgpt.site"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "UChicago MSA" },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#f8f5ed" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
