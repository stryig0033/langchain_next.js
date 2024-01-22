import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Next.js + LangChain.js
      </h1>
      <ul>
        <li className="text1">
          LangChainを用いたnext.jsのデモアプリ
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji=""
      titleText="Patchy the Chatty Pirate"
      placeholder="チャット内容を入力"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
