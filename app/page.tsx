// ============================================================
//  天気アプリ ― 全体の組み立て役（このファイルは「並べるだけ」）
//
//  ★ 各カードの中身は components/ の中の担当ファイルを編集してください ★
//    天気     → app/components/Weather.tsx
//    気温     → app/components/Temperature.tsx
//    洗濯情報 → app/components/Laundry.tsx
//    その他   → app/components/OtherInfo.tsx
//
//  ※ このファイル(page.tsx)は基本さわらなくてOK。
//     さわる時はみんなで相談してから変えましょう（全員に影響するため）。
// ============================================================

import Weather from "./components/Weather";
import Temperature from "./components/Temperature";
import Laundry from "./components/Laundry";
import OtherInfo from "./components/OtherInfo";

export default function Home() {
  return (
    // 背景（青いグラデーション）と、中身を中央にそろえる箱
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-200 flex justify-center">
      <div className="w-full max-w-md p-5">

        {/* 一番上のタイトル */}
        <header className="text-center text-white py-5">
          <h1 className="text-2xl font-bold">天気アプリ</h1>
        </header>

        {/* ↓ 4つのカードを並べているだけ。中身は各担当ファイルへ ↓ */}
        <Weather />      {/* 天気     担当 */}
        <Temperature />  {/* 気温     担当 */}
        <Laundry />      {/* 洗濯情報 担当 */}
        <OtherInfo />    {/* その他   担当 */}

      </div>
    </main>
  );
}
