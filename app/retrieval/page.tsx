import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Next.js + LangChain.js Retrieval Chain
      </h1>
      <ul>
        <li className="text-1">
        リトリーバル（検索）機能とは、大量の情報やデータの中から、特定のクエリや質問に関連する情報を見つけ出し、取り出す機能のことです。具体的には以下のようなプロセスを含みます：
          クエリ処理: ユーザーからの質問や検索クエリを受け取り、それを処理して検索に適した形に変換します。
          情報検索: クエリに関連する情報を、データベースやドキュメントコレクションから検索します。この過程では、テキストのマッチング、関連度の計算などが行われます。
          ランキング: 検索された情報を関連性の高い順に並べ替えます。これにより、最も適切と思われる情報をユーザーに提示できます。
          結果提示: 最終的に選ばれた情報をユーザーに表示します。このとき、情報の要約や重要な部分の強調表示などが行われることもあります。
        </li>
        <li className="hidden text-l md:block">
          🪜
          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, it rephrases the input question into a
                &quot;standalone&quot; question, dereferencing pronouns based on
                the chat history.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        '質問を入力"'
      }
      emoji=""
      titleText="retriever"
    ></ChatWindow>
  );
}
