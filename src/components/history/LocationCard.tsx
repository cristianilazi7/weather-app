import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { WeatherApiResponse } from "../../types/weather";
import { kelvinToCelsius } from "../../types/weather";

type Props = {
  data: WeatherApiResponse;
  selected?: boolean;
  onClick?: () => void;
};

const Card = styled(Box)<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(1.5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.palette.grey[200] : theme.palette.grey[900]};
  color: ${({ theme, selected }) =>
    selected ? theme.palette.text.primary : theme.palette.common.white};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.grey[300] : theme.palette.grey[800]};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocationCard = ({ data, selected = false, onClick }: Props) => {
  const temperature = Math.round(kelvinToCelsius(data.main.temp));
  const high = Math.round(kelvinToCelsius(data.main.temp_max));
  const low = Math.round(kelvinToCelsius(data.main.temp_min));
  const condition = data.weather[0]?.main ?? "";

  const localTime = new Date(data.dt * 1000 + data.timezone * 1000);
  const time = localTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card selected={selected} onClick={onClick}>
      <Row>
        <Typography
          variant="subtitle1"
          fontWeight={selected ? "bold" : "normal"}
          color={selected ? "text.primary" : "common.white"}
        >
          {data.name}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="light"
          color={selected ? "text.primary" : "common.white"}
        >
          {temperature}°
        </Typography>
      </Row>

      <Typography variant="caption" color="inherit">
        {time}
      </Typography>

      <Row>
        <Typography variant="caption" color="inherit">
          {condition}
        </Typography>
        <Typography variant="caption" color="inherit">
          H:{high}° L:{low}°
        </Typography>
      </Row>
    </Card>
  );
};

export default LocationCard;
