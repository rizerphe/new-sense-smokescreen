"use client";
import { Flow_Block, Montserrat } from "next/font/google";
import { useState } from "react";
import styles from "./NewsBlock.module.sass";
import { IoMdSend } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";

const font = Flow_Block({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

interface Message {
  is_ai: boolean;
  text: string[];
}

function Chat({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typedMessage, setTypedMessage] = useState("");
  const [allowTyping, setAllowTyping] = useState(true);

  const randomlyRespliced = (words: string[]): string[][] => {
    // Join consequtive pairs of words with newlines randomly
    const n_splits = Math.floor(
      (words.length - 1) * (0.5 + Math.random() * 0.5) * 0.1
    );
    const splits: number[] = [];
    for (let i = 0; i < n_splits; i++) {
      splits.push(Math.floor(Math.random() * words.length));
    }
    splits.sort();
    splits.reduce((prev, curr, i) => {
      if (curr === prev) {
        splits.splice(i, 1);
      }
      return curr;
    }, -1);
    const result = [];
    let prev = 0;
    for (const split of splits) {
      result.push(words.slice(prev, split));
      prev = split;
    }
    result.push(words.slice(prev));
    return result;
  };

  const onlyCutNWords = (lines: string[][], words: number): string[][] => {
    // Cut lines to have at most `words` words
    const result = [];
    let n_words = 0;
    for (const line of lines) {
      if (n_words + line.length > words) {
        result.push(line.slice(0, words - n_words));
        break;
      }
      result.push(line);
      n_words += line.length;
    }
    return result;
  };

  const sendMessage = () => {
    setTypedMessage("");
    setAllowTyping(false);
    const ai_content =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ".repeat(
        5
      );
    let words_sent = 0;
    const messages_copy = [...messages, { is_ai: false, text: [typedMessage] }];
    const words = ai_content.split(" ");
    const words_to_send = Math.floor(Math.random() * words.length);
    const lines = randomlyRespliced(words);
    const interval = setInterval(() => {
      setMessages(() => [
        ...messages_copy,
        {
          is_ai: true,
          text: onlyCutNWords(lines, words_sent + 1).map((x) => x.join(" ")),
        },
      ]);
      words_sent++;
      if (words_sent >= words_to_send) {
        clearInterval(interval);
        setAllowTyping(true);
      }
    }, 50);
  };

  return (
    <div className={`rounded-xl${messages.length ? " bg-gray-100" : ""}`}>
      <div className="flex flex-col w-full">
        {messages.map((message, i) => (
          <div
            className={`flex flex-col gap-2 p-4 text-sm text-gray-600 ${
              message.is_ai ? "bg-gray-200" : "bg-gray-100"
            } ${message.is_ai ? font.className : montserrat.className}`}
            key={i}
          >
            {message.text.map((line, j) => (
              <div key={j}>{line}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-2 w-full items-center p-4">
        <div className="flex flex-row gap-2 w-full rounded-full border-2 border-gray-400 p-4">
          <input
            type="text"
            disabled={!allowTyping}
            className={`input bg-transparent w-full border-none outline-none ${montserrat.className}`}
            placeholder="Запитати у штучного інтелекту"
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <IoMdSend
            className="text-2xl text-gray-400 cursor-pointer"
            onClick={sendMessage}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default function NewsBlock({
  full: _full = true,
  collapsed: init_collapsed = false,
}: {
  full?: boolean;
  collapsed?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [collapsed, setCollapsed] = useState(init_collapsed);
  const full = _full && !collapsed;

  return (
    <div
      className={`${font.className} ${styles.block} flex flex-col gap-4 p-4 ${
        !collapsed ? "hover:bg-gray-50" : "bg-gray-100 hover:bg-gray-200"
      }`}
      onClick={() => setCollapsed(false)}
    >
      <div
        className={`text-lg font-bold ${
          full ? "text-gray-800" : "text-gray-500"
        }`}
      >
        News Title
      </div>
      <div
        className={`${montserrat.className} flex flex-col ${
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
      {!collapsed && (
        <div className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
          dolore quis. Obcaecati mollitia ducimus accusamus alias aut atque
          beatae possimus facere, veniam voluptate qui laudantium sunt harum
          aperiam, voluptates soluta?
        </div>
      )}
      {expanded && (
        <div className="flex flex-col gap-2 pl-8">
          <NewsBlock full={false} />
          <NewsBlock full={false} />
          <NewsBlock full={false} />
        </div>
      )}
      {full && (
        <Chat>
          <div>
            <a
              className="button text-gray-400 text-bold text-lg rounded-md w-min whitespace-nowrap cursor-pointer flex flex-row items-center"
              href="/about"
            >
              Читати повністю <MdNavigateNext className="text-2xl" />
            </a>
            {!expanded && (
              <span
                className="button text-gray-400 text-bold text-lg rounded-md w-min whitespace-nowrap cursor-pointer flex flex-row items-center"
                onClick={() => setExpanded(!expanded)}
              >
                Інші джерела <MdNavigateNext className="text-2xl" />
              </span>
            )}
          </div>
        </Chat>
      )}
    </div>
  );
}
