// ============================================================
//  天気カード（てんき）   担当の人 → このファイルだけを編集します
// ============================================================
//  ▼ HTML にあたる部分 … <div> ～ </div> の中に「画面に出す中身」を書く
//  ▼ CSS  にあたる部分 … className="..." の中に「見た目(Tailwind)」を書く
//
//  よく使うタグ:
//    <h2>見出し</h2>   <p>文章</p>   <span>小さな文字</span>
//  Tailwindの例:
//    text-2xl(文字を大きく)  font-bold(太字)  text-blue-500(青)  text-center(中央)
// ============================================================

export default function Weather() {
  return (
    // ↓ この className="" の中に「CSS（見た目）」を書きます
    <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg text-center">

      {/* ▼▼▼ ここに「天気」の中身を書いてください ▼▼▼ */}

      <h2 className="text-base text-gray-600">天気</h2>
      {/* 例: <div className="text-7xl">☀️</div> のように絵文字や文字を足していく */}

      {/* ▲▲▲ ここまで ▲▲▲ */}

    </div>
  );
}
