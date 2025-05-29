import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s: Stelix",
    default: "Welcome Stelix",
  },

  description:
    "Escape to Stelix — browse cozy cabins, book unforgettable stays, and let your next adventure begin in a world where comfort meets wonder.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Stelix</footer>
      </body>
    </html>
  );
}
