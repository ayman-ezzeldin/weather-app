import axios from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchWeather(num: number = 1) {
    const respose = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Cairo&cnt=${num}&appid=dc4d4b37c39bf07d6d1cfec915516f6b`);
    return respose.data?.list
  }

