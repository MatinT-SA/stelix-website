import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Stelix website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
