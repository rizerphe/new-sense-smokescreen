function Keyword({ children }: { children: string }) {
  return (
    <span className="overflow-visible text-4xl sm:text-6xl font-bold keyword">
      <span className="keyword-spacer">{children}</span>
      <span className="keyword-content">{children}</span>
    </span>
  );
}

export default function HeadingBlock({
  intro,
  title,
}: {
  intro: string;
  title: string;
}) {
  return (
    <div className="overflow-visible flex flex-1 flex-col items-center justify-between gap-8">
      <span className="text-4xl sm:text-6xl font-bold">{intro}</span>
      <Keyword>{title}</Keyword>
    </div>
  );
}
