import Image from "next/image";
import bg from "@/public/bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24 3xl:mt-48">
      <Image
        src={bg}
        quality={80}
        placeholder="blur"
        fill
        className="object-cover object-top"
        alt="Sunset view at tropical beach resort"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-3xl text-primary-50 mb-10 tracking-tight font-normal 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl">
          Experience the ultimate escape
        </h1>
        <Link
          href="/cabins"
          className="bg-rosewood-500 px-8 py-6 rounded-xl text-primary-50 text-lg font-semibold hover:bg-rosewood-600 transition-all "
        >
          Discover our cabins
        </Link>
      </div>
    </main>
  );
}
