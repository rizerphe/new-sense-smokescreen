import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full bg-gray-800 p-4 flex flex-row items-center gap-4">
      <Image
        src="/logo.png"
        width={64}
        height={64}
        alt="logo"
        className="w-16 h-16"
      />
      <span className="text-white text-2xl font-bold">NewSense</span>
      <a href="/about" className="text-gray-400 m-2 ml-auto text-lg font-bold">
        Про нас
      </a>
      <a href="/download" className="text-gray-400 m-2 text-lg font-bold">
        Завантажити
      </a>
    </div>
  );
}
