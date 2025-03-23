import styled from "styled-components";
import LocationCard from "./LocationCard";
import { WeatherApiResponse } from "../../types/weather";
import { Typography } from "@mui/material";

type Props = {
  locations: WeatherApiResponse[];
  selectedId?: number;
  onSelect?: (id: number) => void;
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const RecentLocationsList = ({ locations, selectedId, onSelect }: Props) => {
  if (!locations.length) {
    return (
      <Typography variant="body2" color="text.secondary">
        No recent locations
      </Typography>
    );
  }

  return (
    <ListWrapper>
      {locations.map((location) => {
        const isSelected = location.id === selectedId;

        return (
          <LocationCard
            key={location.id}
            data={location}
            selected={isSelected}
            onClick={() => onSelect?.(location.id)}
          />
        );
      })}
    </ListWrapper>
  );
};

export default RecentLocationsList;
