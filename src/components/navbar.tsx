import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-gray-800 p-4 flex flex-row items-center gap-4">
      <Link
        href="/"
        className="flex flex-row items-center justify-center gap-4"
      >
        <Image
          src="/logo.png"
          width={64}
          height={64}
          alt="logo"
          className="w-16 h-16"
        />
        <span className="text-white text-2xl font-bold">NewSense</span>
      </Link>
      <a href="/about" className="text-gray-400 m-2 ml-auto text-lg font-bold">
        Про нас
      </a>
    </div>
  );
}
