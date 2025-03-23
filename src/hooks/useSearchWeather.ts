import { useMutation } from "@tanstack/react-query";
import { fetchCoordinates, fetchWeatherByCoords } from "../api/weatherAPI";
import { useAppDispatch } from "../store/hooks";
import { setSelectedLocation } from "../store/weatherSlice";
import { useSnackbar } from "notistack";

export const useSearchWeather = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async (cityName: string) => {
      const { lat, lon } = await fetchCoordinates(cityName);
      return fetchWeatherByCoords({ lat, lon });
    },
    onSuccess: (weatherData) => {
      dispatch(setSelectedLocation(weatherData));
      enqueueSnackbar(`Weather loaded for ${weatherData.name}`, {
        variant: "success",
      });
    },
    onError: (error) => {
      console.error("Search failed:", error);
      enqueueSnackbar(error.message || "City not found", {
        variant: "error",
      });
    },
  });
};
