import NewsBlock from "./NewsBlock";
import HeadingBlock from "./HeadingBlock";

export default function News() {
  return (
    <div className="news w-full p-4 flex flex-col md:flex-row flex-wrap items-center gap-4">
      <HeadingBlock intro="Будь менш" title="перевантаженим." />
      <div className="flex flex-1 flex-column min-w-[50vw] p-4">
        <div className="flex flex-col items-left gap-4 p-4 border-2 rounded">
          <NewsBlock />
          <NewsBlock className="hidden md:block" />
          <NewsBlock className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
