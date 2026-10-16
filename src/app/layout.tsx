import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/theme-provider";
import { PremiumProvider } from "@/components/premium/premium-provider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XPVest — Learn, Simulate & Earn",
  description:
    "XPVest is your digital finance companion: learn investing, simulate trades and earn coins and XP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body>
        <script
          // Applies the stored theme before paint so there is no flash.
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>
          <PremiumProvider>{children}</PremiumProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
