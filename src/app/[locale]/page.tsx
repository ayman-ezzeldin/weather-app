"use client";
import {getTranslations} from 'next-intl/server';
import ModeToggle  from './_components/DarkToggle';
import Sidebar from './_components/Sidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

export default function Home() {
  // const t = await getTranslations('HomePage');
  const [weatherData, setWeatherData] = useState([]);


  useEffect(  () => {
    async function fetchData() {
      const respose = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Cairo&cnt=8&appid=dc4d4b37c39bf07d6d1cfec915516f6b');
      setWeatherData(respose.data?.list);
      console.log(respose.data?.list);
    }
    fetchData();
  },[])
  
  return (
    <div>
      <Sidebar />
      <ul>
        {weatherData.map((item, index) => (
          <li key={index}>
            {format(parseISO(item?.dt_txt), 'eeee, MMMM d, yyyy HH:mm')} - {Math.floor(item.main.temp - 273.15) }
          </li>
        ))}
      </ul>
      <h1>done</h1>
      {/* <h1>{t('title')}</h1>; */}
      <ModeToggle />
    </div>
  );
}
