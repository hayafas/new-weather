// ============================================================
//  気温カード（きおん）   担当の人 → このファイルだけを編集します
// ============================================================
//  ▼ HTML にあたる部分 … <div> ～ </div> の中に「画面に出す中身」を書く
//  ▼ CSS  にあたる部分 … className="..." の中に「見た目(Tailwind)」を書く
//
//  よく使うタグ:
//    <h2>見出し</h2>   <p>文章</p>   <span>小さな文字</span>
//  Tailwindの例:
//    text-5xl(文字をとても大きく)  font-bold(太字)  text-red-500(赤)  my-2(上下に余白)
// ============================================================

export default function Temperature() {
  return (
    // ↓ この className="" の中に「CSS（見た目）」を書きます
    <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg text-center">

      {/* ▼▼▼ ここに「気温」の中身を書いてください ▼▼▼ */}

      <h2 className="text-base text-gray-600">気温</h2>
      {/* 例: <div className="text-5xl font-bold my-2">28℃</div> のように書く */}

      {/* ▲▲▲ ここまで ▲▲▲ */}

    </div>
  );
}
