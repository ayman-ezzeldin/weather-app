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
  return (
    <div className="flex flex-col items-center justify-around ml-20 mt-20 w-1/4 h-[70vh] backdrop-blur-[4px] border-1 overflow-hidden rounded-3xl text-white">
      <input
        type="text"
        placeholder="Search"
        className="text-gray-300 font-sans border p-2 pl-5 focus:outline-none focus:border-gray-500 focus:shadow-md shadow-gray-600 rounded-3xl w-[70%] mx-auto"
      />

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div>
          <Image
            src="./log.svg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <ul>
          {weatherData.map((item, index) => (
            <li key={index} className="text-gray-400 text-2xl">
              {format(parseISO(item?.dt_txt), "eeee")} -{" "}
              {Math.floor(item.main.temp - 273.15)}°
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-gray-400 text-3xl">
          {(() => {
            const dateStr = weatherData[0]?.dt_txt;
            if (!dateStr) return "No Data";

            const parsedDate = parseISO(dateStr);
            return format(parsedDate, "eeee, MMMM d yyyy");
          })()}
        </div>
      </div>
    </div>
  );
}
