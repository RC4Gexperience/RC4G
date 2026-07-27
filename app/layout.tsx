import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RC4G Expérience — Piloter sans frontière",
  description:
    "Découvrez RC4G Expérience, un projet de voiture radiocommandée pilotable à distance par Internet avec retour vidéo et audio.",
  metadataBase: new URL("https://rc4g.fr"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "RC4G Expérience — Piloter sans frontière",
    description: "Une voiture RC, une connexion 4G et une expérience de conduite immersive.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-rc4g.png",
        width: 1680,
        height: 945,
        alt: "Le Hilux RC4G Expérience sur terrain de franchissement",
      },
    ],
  },
  icons: {
    icon: "/logo-rc4g.png",
    shortcut: "/logo-rc4g.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "RC4G Expérience — Piloter sans frontière",
    description: "Une voiture RC, une connexion 4G et une expérience de conduite immersive.",
    images: ["/og-rc4g.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
