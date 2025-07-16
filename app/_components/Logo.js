import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="Stelix logo"
        className="hover:scale-110 transition duration-300"
      />
      <span className="text-xl font-semibold text-primary-100 hover:scale-125 hover:text-primary-200 transition duration-200">
        Stelix
      </span>
    </Link>
  );
}

export default Logo;
