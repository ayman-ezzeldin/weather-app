"use client";
import Image from "next/image";
import { format, parseISO } from "date-fns";

type WeatherItem = {
  dt_txt: string;
  main: {
    temp: number;
  };
};

type WeatherCardProps = {
  weatherData: WeatherItem[];
};

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  const firstItem = weatherData[0];

  return (
    <div className="flex flex-col items-center justify-around mt-20 min-w-[250px] w-full h-[50vh] backdrop-blur-[4px] border-1 overflow-hidden rounded-3xl">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src="./log.svg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full select-none"
            draggable="false"
          />
        </div>

        {firstItem ? (
          <>
            <p className="text-lg mt-4">
              {format(parseISO(firstItem.dt_txt), "eeee")}
            </p>
            <p className="text-lg mt-4">
              {format(parseISO(firstItem.dt_txt), "MMMM d yyyy")}
              {format(parseISO(firstItem.dt_txt), " 'at' HH:mm")}
            </p>
            <p className="text-xl mt-2">
              {Math.floor(firstItem.main.temp - 273.15)}°
            </p>
          </>
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
}
