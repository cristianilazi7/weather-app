export interface WeatherApiResponse {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeatherData;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SystemInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Clouds {
  all: number;
}

export interface SystemInfo {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export type WeatherInfoItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
};

export const formatTimestamp = (
  timestamp: number,
  timezone: number
): string => {
  const date = new Date(timestamp * 1000);

  const localTime = new Date(date.getTime() + timezone * 1000);

  return localTime.toLocaleString();
};

export const kelvinToCelsius = (kelvin: number): number => {
  return kelvin - 273.15;
};

export const kelvinToFahrenheit = (kelvin: number): number => {
  return ((kelvin - 273.15) * 9) / 5 + 32;
};
