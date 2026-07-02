"use client"; // データをコンポーネント内で管理するために必須です

import { useState, useEffect } from "react";
import BlurText from "../components/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Weather() {
  const [weatherData, setWeatherData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    // ブラウザが位置情報に対応しているかチェック
    if (!navigator.geolocation) {
      setErrorMsg("お使いのブラウザは位置情報に対応していません。");
      setLoading(false);
      return;
    }

    // 現在位置（GPS/ネットワーク）を取得
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;  // 緯度を取得
        const lon = position.coords.longitude; // 経度を取得
        // URLに取得した lat と lon を埋め込む（ついでに単位をセルシウス、言語を日本語に設定）
        const url = location.origin + `/api/weather?lat=${lat}&lon=${lon}`;
        // 取得した現在位置のURLでフェッチ
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log("APIレスポンス:", data);
            setWeatherData(data);
            console.log("https://openweathermap.org/payload/api/media/file/" + data.weather?.[0]?.icon + ".png")
            setLoading(false);
          })
          .catch((error) => {
            console.error("APIクライアントエラー:", error);
            setErrorMsg("天気データの取得に失敗しました。");
            setLoading(false);
          });
      },

      (error) => {
        // ユーザーが位置情報の許可を拒否した場合などのエラーハンドリング
        console.error("位置情報取得エラー:", error);
        setErrorMsg("位置情報の取得が許可されませんでした。");
        setLoading(false);
      },
      {
        enableHighAccuracy: false, // 高精度を求めない（高速化）
        // timeout: 5000,             // 5秒経ったら諦める
        maximumAge: 300000          // 5分以内に取得したキャッシュがあればそれを使う
      }
    );
  }, []); // 最後の [ ] が「最初の1回だけ実行してね」というお守り

  return (
    <>
      <div className="text-gray-600 dark:text-gray-400">
        <BlurText
          text={weatherData.weather?.[0]?.main ? "今日の天気：" + weatherData.weather?.[0]?.main : "今日の天気：読み込み中..."}
          delay={200}
          stepDuration={0.65}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="weather-status"
        />
        <img src={weatherData.weather?.[0]?.icon
          ? "https://openweathermap.org/payload/api/media/file/" + weatherData.weather?.[0]?.icon + "@2x.png"
          : "/loading_icon.png"}
          alt={"天気アイコン"}
          width="40px"
        />
      </div>
    </>

  )
}
