export default function NewsBlock({ className }: { className?: string }) {
  return (
    <div className={`news-block ${className}`}>
      <div className="news-block-title">News Title</div>
      <div className="news-block-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        dolore quis. Obcaecati mollitia ducimus accusamus alias aut atque beatae
        possimus facere, veniam voluptate qui laudantium sunt harum aperiam,
        voluptates soluta?
      </div>
    </div>
  );
}
