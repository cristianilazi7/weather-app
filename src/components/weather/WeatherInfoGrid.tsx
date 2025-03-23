import styled from "styled-components";
import InfoCard from "./cards/InfoCard";
import { WeatherInfoItem } from "../../types/weather";

type Props = {
    items: WeatherInfoItem[];
  };

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const WeatherInfoGrid = ({ items }: Props) => {

  return (
    <Grid>
      {items.map((item) => (
        <InfoCard
          key={item.id}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </Grid>
  );
};

export default WeatherInfoGrid;