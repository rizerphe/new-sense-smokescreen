import { Flow_Block } from "next/font/google";
import styles from "./NewsBlock.module.sass";

const font = Flow_Block({ subsets: ["latin"], weight: "400" });

export default function NewsBlock({ className }: { className?: string }) {
  return (
    <div className={`${font.className} ${styles.block} ${className}`}>
      <div className="text-lg text-gray-800 font-bold">News Title</div>
      <div className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        dolore quis. Obcaecati mollitia ducimus accusamus alias aut atque beatae
        possimus facere, veniam voluptate qui laudantium sunt harum aperiam,
        voluptates soluta?
      </div>
    </div>
  );
}
