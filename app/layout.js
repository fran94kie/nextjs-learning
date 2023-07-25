import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body className={"${montserrat.className} mx-32"}>
        {/* <nav>
          <h1>logo</h1>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}