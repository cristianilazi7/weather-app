import styled from "styled-components";
import CurrentWeather from "./CurrentWeather";
import WeatherInfoGrid from "./WeatherInfoGrid";
import { WeatherApiResponse } from "../../types/weather";
import NoLocationMessage from "../layout/NoLocationMessage";
import { useAppSelector } from "../../store/hooks";

import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SpeedIcon from "@mui/icons-material/Speed";
import { WeatherInfoItem } from "../../types/weather";

type Props = {
  data?: WeatherApiResponse;
  unit?: "C" | "F";
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Dashboard = ({ data, unit = "C" }: Props) => {
  const history = useAppSelector((state) => state.weather.history);

  if (!data) {
    return (
      <Container>
        <NoLocationMessage hasHistory={history.length > 0} />
      </Container>
    );
  }

  const unitSystem = unit === "C" ? "metric" : "imperial";

  const visibility =
    unitSystem === "metric"
      ? `${(data.visibility / 1000).toFixed(1)} km`
      : `${(data.visibility / 1609.34).toFixed(1)} mi`;

  const windSpeed =
    unitSystem === "metric"
      ? `${data.wind.speed} m/s`
      : `${(data.wind.speed * 2.237).toFixed(1)} mph`;

  const infoItems: WeatherInfoItem[] = [
    { id:"Wind", icon: <AirIcon />, label: "Wind", value: windSpeed },
    { id:"Humidity", icon: <WaterDropIcon />, label: "Humidity", value: `${data.main.humidity}%` },
    { id:"Visibility", icon: <VisibilityIcon />, label: "Visibility", value: visibility },
    { id:"Pressure", icon: <SpeedIcon />, label: "Pressure", value: `${data.main.pressure} hPa` },
  ];

  return (
    <Container>
      <CurrentWeather data={data} unit={unit} />
      <WeatherInfoGrid items={infoItems} />
    </Container>
  );
};

export default Dashboard;
