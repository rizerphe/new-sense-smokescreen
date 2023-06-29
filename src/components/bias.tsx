import NewsBlock from "./BiasedNewsBlock";
import HeadingBlock from "./HeadingBlock";

export default function Bias() {
  return (
    <div className="biases w-full p-4 flex flex-col md:flex-row-reverse flex-wrap items-center gap-4">
      <HeadingBlock intro="Не будь" title="упередженим." />
      <div className="flex flex-1 flex-column min-w-[50vw] p-4">
        <div className="flex flex-col items-left border-2 rounded">
          <NewsBlock collapsed />
          <NewsBlock />
          <NewsBlock collapsed />
        </div>
      </div>
    </div>
  );
}
