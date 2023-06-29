import { useState } from "react";

export default function NewsBlock({ full = true }: { full?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="news-block">
      <div
        className={`news-block-title${
          full ? "text-gray-800" : " text-gray-500"
        }`}
      >
        News Title
      </div>
      <div
        className={`bias-block flex flex-col ${
          full ? "p-3 w-full" : "w-1/2"
        } items-start gap-2 bg-gray-100 rounded`}
      >
        {full && (
          <div className="text-sm text-gray-600 font-bold px-3">
            Упередження:
          </div>
        )}
        <div className="flex flex-row items-center gap-0 rounded overflow-hidden w-full">
          <div
            className={`w-[10%] text-sm font-bold text-gray-600 flex justify-center bg-green-400${
              full ? "" : " h-1"
            }`}
          >
            {full && "10%"}
          </div>
          <div
            className={`w-[35%] text-sm font-bold text-gray-600 flex justify-center bg-yellow-400${
              full ? "" : " h-1"
            }`}
          >
            {full && "35%"}
          </div>
          <div
            className={`w-[55%] text-sm font-bold text-gray-600 flex justify-center bg-red-400${
              full ? "" : " h-1"
            }`}
          >
            {full && "55%"}
          </div>
        </div>
      </div>
      <div className="news-block-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        dolore quis. Obcaecati mollitia ducimus accusamus alias aut atque beatae
        possimus facere, veniam voluptate qui laudantium sunt harum aperiam,
        voluptates soluta?
      </div>
      {expanded && (
        <div className="flex flex-col gap-2 pl-8">
          <NewsBlock full={false} />
          <NewsBlock full={false} />
          <NewsBlock full={false} />
        </div>
      )}
      {full && !expanded && (
        <span
          className="button py-2 px-3 bg-gray-400 text-white text-bold text-lg rounded-md w-min whitespace-nowrap cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          Інші джерела &gt;
        </span>
      )}
    </div>
  );
}
