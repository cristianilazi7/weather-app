import { useState } from "react";
import styled from "styled-components";
import { Input, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchWeather } from "../../hooks/useSearchWeather";

const Form = styled(Paper)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const SearchBar = () => {
  const [city, setCity] = useState("");
  const searchMutation = useSearchWeather();

  const handleSearch = () => {
    if (!city.trim()) return;
    searchMutation.mutate(city.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Form elevation={2}>
      <Input
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        disableUnderline
        sx={{ flex: 1, marginRight: 1 }}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Form>
  );
};

export default SearchBar;
