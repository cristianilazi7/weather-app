import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 8000,
});

const withApiKey = (params: Record<string, string | number>) => ({
    ...params,
    appid: API_KEY,
  });

export const fetchCoordinates = async (city: string) => {
  const { data } = await axiosInstance.get("/geo/1.0/direct", {
    params: withApiKey({ q: city, limit: 1 }),
  });

  if (!data.length) {
    throw new Error("City not found");
  }

  const { lat, lon } = data[0];
  return { lat, lon };
};

export const fetchWeatherByCoords = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  const { data } = await axiosInstance.get("/data/2.5/weather", {
    params: withApiKey({ lat, lon }),
  });

  return data;
};
