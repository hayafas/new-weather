// ============================================================
//  洗濯情報カード（せんたく）   担当の人 → このファイルだけを編集します
// ============================================================
//  ▼ HTML にあたる部分 … <div> ～ </div> の中に「画面に出す中身」を書く
//  ▼ CSS  にあたる部分 … className="..." の中に「見た目(Tailwind)」を書く
//
//  よく使うタグ:
//    <h2>見出し</h2>   <p>文章</p>   <span>小さな文字</span>
//  Tailwindの例:
//    text-lg(やや大きい文字)  font-bold(太字)  text-green-600(緑)  mt-1(上に余白)
// ============================================================

export default function Laundry() {
  return (
    // ↓ この className="" の中に「CSS（見た目）」を書きます
    <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg">

      {/* ▼▼▼ ここに「洗濯情報」の中身を書いてください ▼▼▼ */}

      <h2 className="text-base text-gray-600 mb-2">洗濯情報</h2>
      {/* 例: <p className="text-lg font-bold text-green-600">よく乾きます！</p> */}

      {/* ▲▲▲ ここまで ▲▲▲ */}

    </div>
  );
}
