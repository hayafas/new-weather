// ４つのカードの仕組みが廃止されて、ここで色々と書きます

import Weather from "../components/weather_data";
import BlurText from "../components/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Homepage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-600 dark:to-slate-700 p-4 sm:p-8">

      <main className="max-w-4xl mx-auto">

        <div>
          <h1>
            天気アプリへようこそ
          </h1>
        </div>


        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            天気予報
          </h1>
          <Weather />
          
        </div>

      </main>
    </div>
  );
}