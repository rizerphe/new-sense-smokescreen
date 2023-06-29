import NewsBlock from "./BiasedNewsBlock";
import HeadingBlock from "./HeadingBlock";

export default function Bias() {
  return (
    <div className="w-full p-4 flex flex-row-reverse flex-wrap items-center gap-4">
      <HeadingBlock intro="Позбудься" title="упереджень." />
      <div className="w-full flex flex-column p-4">
        <div className="w-full flex flex-col items-left gap-4 p-4 border-2 rounded">
          <NewsBlock />
        </div>
      </div>
    </div>
  );
}
