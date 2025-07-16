import Image from "next/image";
import bg from "@/public/bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        quality={80}
        placeholder="blur"
        fill
        className="object-cover object-top"
        alt="Sunset view at tropical beach resort"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Experience the ultimate escape
        </h1>
        <Link
          href="/cabins"
          className="bg-rosewood px-8 py-6 rounded-xl text-primary-50 text-lg font-semibold hover:bg-[#a84ccf] transition-all"
        >
          Discover our cabins
        </Link>
      </div>
    </main>
  );
}
