// src/components/layout/NoLocationMessage.tsx
import styled from "styled-components";
import { Typography } from "@mui/material";

const Container = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

interface Props {
  hasHistory: boolean;
}

const NoLocationMessage = ({ hasHistory }: Props) => {
  return (
    <Container>
      <Typography variant="h6">No location selected.</Typography>
      <Typography variant="body2">
        {hasHistory
          ? "Please select a location from the sidebar to view the weather data."
          : "Use the search bar to look up your city and view its weather."}
      </Typography>
    </Container>
  );
};

export default NoLocationMessage;
