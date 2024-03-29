import { Saira } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { FilterContextProvider } from "@/contexts/filter-context";

const saira = Saira({ 
  weight:["300","400", "500", "600"],
  subsets: ["latin" ] 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <FilterContextProvider><Header/>{children}</FilterContextProvider>
      </body>
    </html>
  );
}
