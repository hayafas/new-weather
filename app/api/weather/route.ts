import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const lat = searchParams.get('lat'); // クエリパラメータの取得
    const lon = searchParams.get('lon');

    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        console.error("APIキーが設定されてないよ！。.envを確認してね");
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ja`;
    // 取得した現在位置のURLでフェッチ
    try {
        const response = await fetch(url);
        const data = await response.json();

        return Response.json(data);
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Failed to fetch weather" },
            { status: 500 }
        );
    }
}