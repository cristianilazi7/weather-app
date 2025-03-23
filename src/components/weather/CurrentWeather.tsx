import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { WeatherApiResponse } from "../../types/weather";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  formatTimestamp,
} from "../../types/weather";

type Props = {
  data: WeatherApiResponse;
  unit?: "C" | "F";
};

const Card = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TempRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrentWeather = ({ data, unit = "C" }: Props) => {
  const toUnit = (kelvin: number) =>
    unit === "C"
      ? Math.round(kelvinToCelsius(kelvin))
      : Math.round(kelvinToFahrenheit(kelvin));

  const temp = toUnit(data.main.temp);
  const feelsLike = toUnit(data.main.feels_like);
  const high = toUnit(data.main.temp_max);
  const unitSymbol = unit === "C" ? "°C" : "°F";
  const description = data.weather[0]?.description ?? "Clear";

  const time = formatTimestamp(data.dt, data.timezone);

  return (
    <Card>
      <Header>
        <Typography variant="subtitle2">Current Weather</Typography>
        <Typography variant="body2">{time.split(", ")[1]}</Typography>
      </Header>

      <TempRow>
        <WbSunnyRoundedIcon fontSize="large" />

        <Typography variant="h3" fontWeight={300}>
          {temp}
          {unitSymbol}
        </Typography>

        <Column>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            {description}
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            Feels Like {feelsLike}
            {unitSymbol}
          </Typography>
        </Column>
      </TempRow>

      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        There will be mostly sunny skies. The high will be {high}
        {unitSymbol}
      </Typography>
    </Card>
  );
};

export default CurrentWeather;
