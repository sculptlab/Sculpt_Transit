import "src/css/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/theme";
import { DataProvider } from "@/context/Datalayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SCULPT Transit",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // console.log(theme);
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </DataProvider>
      </body>
    </html>
  );
}
