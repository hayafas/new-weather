// ============================================================
//  その他の情報カード   担当の人 → このファイルだけを編集します
//  （湿度・風・降水確率・週間予報など、自由に追加してOK）
// ============================================================
//  ▼ HTML にあたる部分 … <div> ～ </div> の中に「画面に出す中身」を書く
//  ▼ CSS  にあたる部分 … className="..." の中に「見た目(Tailwind)」を書く
//
//  よく使うタグ:
//    <h2>見出し</h2>   <p>文章</p>   <span>小さな文字</span>
//  Tailwindの例:
//    flex justify-around(横ならびに)  text-xs(小さい文字)  text-gray-400(うすい灰色)
// ============================================================

export default function OtherInfo() {
  return (
    // ↓ この className="" の中に「CSS（見た目）」を書きます
    <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg">

      {/* ▼▼▼ ここに「その他の情報」の中身を書いてください ▼▼▼ */}

      <h2 className="text-base text-gray-600 mb-2">その他の情報</h2>
      {/* 例: 湿度・風・降水確率を横ならびにする
          <div className="flex justify-around text-center"> ... </div> */}

      {/* ▲▲▲ ここまで ▲▲▲ */}

    </div>
  );
}
