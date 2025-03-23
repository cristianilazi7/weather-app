import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
  timeout: 8000,
})

export const fetchCoordinates = async (city: string) => {
  const { data } = await axiosInstance.get('/geo/1.0/direct', {
    params: {
      q: city,
      limit: 1,
      appid: API_KEY,
    },
  })

  if (!data.length) {
    throw new Error('City not found')
  }

  const { lat, lon } = data[0]
  return { lat, lon }
}

export const fetchWeatherByCoords = async ({
  lat,
  lon,
}: {
  lat: number
  lon: number
}) => {
  const { data } = await axiosInstance.get('/data/2.5/weather', {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  })

  return data
}
