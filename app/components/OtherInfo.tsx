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
           <div className="flex justify-around text-center">
        <div>
          <div className="text-xs text-gray-400">湿度</div>
          <div className="text-lg font-bold mt-1">60%</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">風</div>
          <div className="text-lg font-bold mt-1">3m/s</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">降水確率</div>
          <div className="text-lg font-bold mt-1">10%</div>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />
          
      <div className="flex justify-between text-center">
        <div>
          <div className="text-xs text-gray-400">月</div>
          <div className="text-2xl my-1">☀️</div>
          <div className="text-sm">29/20</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">火</div>
          <div className="text-2xl my-1">⛅</div>
          <div className="text-sm">27/19</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">水</div>
          <div className="text-2xl my-1">🌧️</div>
          <div className="text-sm">24/18</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">木</div>
          <div className="text-2xl my-1">☁️</div>
          <div className="text-sm">26/19</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">金</div>
          <div className="text-2xl my-1">☀️</div>
          <div className="text-sm">30/21</div>
        </div>
      </div>

      {/* ▲▲▲ ここまで ▲▲▲ */}
    </div>
  );

}
