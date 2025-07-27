import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import { auth } from "./_lib/auth";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
});

export const metadata = {
  title: {
    template: "%s: Stelix",
    default: "Welcome Stelix",
  },

  description:
    "Escape to Stelix — browse cozy cabins, book unforgettable stays, and let your next adventure begin in a world where comfort meets wonder.",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en" className={`${josefin.variable} font-josefin`}>
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen antialiased flex flex-col relative 3xl:pt-10`}
      >
        <Header session={session} />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl 3xl:max-w-screen-2xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
