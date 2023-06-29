function LearnMore() {
  return (
    <div className="w-full px-4 flex flex-col items-start justify-center">
      <a
        className="button py-3 px-6 bg-gray-800 text-white text-bold text-2xl rounded-md"
        href="/about"
      >
        Дізнатися більше
      </a>
    </div>
  );
}

export default function About() {
  return (
    <div className="w-full flex flex-col justify-start items-start px-8 py-16 gap-8">
      <span className="text-4xl font-bold">Про нас</span>
      <p className="text-lg">
        NewSense - комплексний новинний агрегатор, що допомагає вам залишатися в
        курсі подій. Наша платформа пропонує персоналізовані рекомендації,
        враховуючи ваші інтереси, та надає прозорість, показуючи упередженість
        кожної новинної статті. Ми виходимо за межі одного джерела, показуючи
        різні точки зору та надаючи підсумок з кожного джерела. Будьте в курсі
        подій, розумійте упередженість та приймайте обґрунтовані рішення з
        NewSense.
      </p>
      <LearnMore />
    </div>
  );
}
