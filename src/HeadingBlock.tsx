export default function HeadingBlock({
  intro,
  title,
}: {
  intro: string;
  title: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-8">
      <span className="text-6xl font-bold">{intro}</span>
      <span className="text-6xl font-bold keyword">{title}</span>
    </div>
  );
}
