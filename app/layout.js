import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

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
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen antialiased flex flex-col ${josefin.className}`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl  mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
