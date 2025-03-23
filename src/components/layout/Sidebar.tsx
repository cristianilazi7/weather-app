import styled from "styled-components";
import { Typography } from "@mui/material";
import SearchBar from "../search/SearchBar";
import RecentLocationsList from "../history/RecentLocationsList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSelectedLocation } from "../../store/weatherSlice";

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { selectedLocation, history = [] } = useAppSelector(
    (state) => state.weather
  );

  return (
    <Container>
      <SearchBar />
      {history.length > 0 && (
        <>
          <Typography variant="subtitle2" color="text.secondary">
            Recent Locations
          </Typography>
          <RecentLocationsList
            locations={history}
            selectedId={selectedLocation?.id}
            onSelect={(id) => {
              const location = history.find((loc) => loc.id === id);
              if (location) {
                dispatch(setSelectedLocation(location));
              }
            }}
          />
        </>
      )}
    </Container>
  );
};

export default Sidebar;
