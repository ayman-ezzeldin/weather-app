"use client";
import { fetchWeather } from "@/lib/utils";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import Header from "./Header";

type WeatherItem = {
  dt_txt: string;
  main: {
    temp: number;
  };
};

export default function Sidebar() {
  const [weatherData, setWeatherData] = useState<WeatherItem[]>([]);
  const [weatherDay, setWeatherDay] = useState<WeatherItem[]>([]);

  useEffect(() => {
    fetchWeather()
      .then((data) => {
        setWeatherDay(data);
        console.log("Weather day data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetchWeather(8)
      .then((data) => {
        setWeatherData(data);
        console.log("Weather forecast data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header weatherData={weatherDay} />

      <div className="w-full flex gap-5 h-screen overflow-x-auto">
          {weatherData.length === 0 ? (
            <div className="flex items-center justify-center w-full">
              <p className="text-white text-lg">Loading...</p>
            </div>
          ) : (
            weatherData.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <WeatherCard weatherData={[item]} />
              </div>
            ))
          )}
      </div>
    </>
  );
}
