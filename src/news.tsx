import NewsBlock from "./NewsBlock";
import HeadingBlock from "./HeadingBlock";

export default function News() {
  return (
    <div className="w-full p-4 flex flex-row items-center gap-4">
      <HeadingBlock intro="Be less" title="overwhelmed." />
      <div className="w-full flex flex-column p-4">
        <div className="w-full flex flex-col items-left gap-4 p-4 border-2 rounded">
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
        </div>
      </div>
    </div>
  );
}
