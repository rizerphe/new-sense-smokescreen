export default function NewsBlock() {
  return (
    <div className="news-block">
      <div className="news-block-title">News Title</div>
      <div className="flex flex-row items-center gap-0 rounded overflow-hidden w-min">
        <div className="w-20 h-3 bg-green-400"></div>
        <div className="w-40 h-3 bg-yellow-400"></div>
        <div className="w-60 h-3 bg-red-400"></div>
      </div>
      <div className="news-block-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        dolore quis. Obcaecati mollitia ducimus accusamus alias aut atque beatae
        possimus facere, veniam voluptate qui laudantium sunt harum aperiam,
        voluptates soluta?
      </div>
    </div>
  );
}
