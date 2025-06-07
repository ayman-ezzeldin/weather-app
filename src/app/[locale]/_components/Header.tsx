import Image from "next/image";
import ModeToggle from "./DarkToggle";
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

const Header = ({ weatherData }: WeatherCardProps) => {
  const firstItem = weatherData[0];

  return (
    <div className="flex">
      <div className=" mt-5 w-6 md:w-auto px-4">
        <ModeToggle />
      </div>
    <div className="flex flex-col md:flex-row items-center justify-around mt-10 mx-auto w-[60%] h-[20vh] backdrop-blur-[4px] border-1 rounded-3xl text-white">
      <div className="flex md:flex-row items-center justify-center gap-4">
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
        <div className="text-gray-300 flex flex-col md:flex-row text-xl md:text-3xl text-center">
          {firstItem ? (
            <>
              <p className="text-lg mt-4">
                {format(parseISO(firstItem.dt_txt), "eeee")} 
              </p>
              <p className="text-xl flex items-center justify-center mt-4 mx-0 md:mx-2">
                {Math.floor(firstItem.main.temp - 273.15)}° 
              </p>
              <div className="text-lg mt-4 flex flex-col md:flex-row items-center justify-center gap-2">
                <p className=" hidden md:flex ">
                  {format(parseISO(firstItem.dt_txt), "MMMM d yyyy")}
                </p>
                <p>
                  {format(parseISO(firstItem.dt_txt), " 'at' HH:mm")} 
                </p>
              </div>
            </>
          ) : (
            <p>No Data</p>
          )}
          {/* {(() => {
                  const dateStr = weatherData[0]?.dt_txt;
                  if (!dateStr) return "No Data";
    
                  const parsedDate = parseISO(dateStr);
                  const formattedDate = format(parsedDate, "eeee, MMMM d yyyy");
                  const HourData = format(parsedDate, " 'at' HH:mm")

                  return (
                    <>
                      {formattedDate}
                      {HourData}
                    </>
                  );
                })()} */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
