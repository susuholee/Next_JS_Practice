'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const AxiosWeather = async () => {
      try {
        const res = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true");
        setWeather(res.data.current_weather);
        console.log("날씨 정보 가져오기 성공");
      } catch (error) {
        console.error("날씨 정보를 가져오는 중 오류 발생:", error);
      }
    };

    AxiosWeather();
  }, []);

  return (
    <div>
      <h2>서울 현재 날씨</h2>
      {weather ? (
        <ul>
          <li>온도: {weather.temperature} oC</li>
          <li>풍속: {weather.windspeed}km</li>
        </ul>
      ) : (
        <p>날씨 정보를 불러오는 중입니다...</p>
      )}
    </div>
  );
}
