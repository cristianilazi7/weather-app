import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherApiResponse } from "../types/weather";

interface WeatherState {
  selectedLocation?: WeatherApiResponse;
  history: WeatherApiResponse[];
}

const initialState: WeatherState = {
  selectedLocation: undefined,
  history: [],
};

const MAX_HISTORY = 5;

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSelectedLocation(state, action: PayloadAction<WeatherApiResponse>) {
      state.selectedLocation = action.payload;
      state.history = state.history.filter(
        (entry) => entry.id !== action.payload.id
      );
      state.history.unshift(action.payload);
      if (state.history.length > MAX_HISTORY) {
        state.history.pop();
      }
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const { setSelectedLocation, clearHistory } = weatherSlice.actions;
export default weatherSlice.reducer;
