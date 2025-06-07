"use client";
import { fetchWeather } from "@/lib/utils";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

type WeatherItem = {
  dt_txt: string;
  main: {
    temp: number;
  };
};

export default function Sidebar() {
  const [weatherData, setWeatherData] = useState<WeatherItem[]>([]);
  useEffect(() => {
    fetchWeather()
      .then((data) => {
        setWeatherData(data);
        console.log("Weather data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <WeatherCard weatherData={weatherData} />
    </>
  );
}
