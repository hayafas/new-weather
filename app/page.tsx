"use client"

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

import Weather from "../components/Weather";
import Temperature from "../components/Temperature";
import Laundry from "../components/Laundry";
import OtherInfo from "../components/OtherInfo";
import { useState, useEffect } from "react";
// 💡 【修正点①】抜けていた Image 部品のインポートを追加しました
import Image from "next/image";

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>({});

  // ✨ useEffect の中に fetch を閉じ込める！
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.689&lon=139.692&appid=bb58c5a33473c48135cac6fd25000496")
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error("APIエラー:", error));
  }, []); // 💡 この最後の「 [ ] 」が「最初の1回だけ実行してね」というお守りです

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file. <br></br>  
            天気アプリへようこそ
          </h1>
          
          {/* 💡 【修正点②】エラーの原因だった {tenkou} を、安全にAPIデータを読み込む形に直しました */}
          <p>今日の天気（データ確認用）：{weatherData.weather?.[0]?.main || "読み込み中..."}</p>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}