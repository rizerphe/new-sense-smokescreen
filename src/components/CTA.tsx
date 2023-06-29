import Link from "next/link";

export default function CTABlock() {
  return (
    <div className="cta-block w-full py-8 flex flex-col items-center justify-center">
      <Link
        className="button py-3 px-6 bg-purple-800 text-white text-bold text-2xl rounded-md"
        href="/download"
      >
        Завантажити
      </Link>
    </div>
  );
}
