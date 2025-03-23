import AppLayout from "../components/layout/AppLayout";
import { useState } from "react";
import Dashboard from "../components/weather/Dashboard";
import { useAppSelector } from "../store/hooks";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";

const Home = () => {
  const selected = useAppSelector((state) => state.weather.selectedLocation);
  const [unit, setUnit] = useState<"C" | "F">("C");

  const handleToggle = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };
  return (
      <AppLayout>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          pt={1}
        >
          <Typography variant="h6" color="text.secondary">
            {selected?.name ?? "No city selected"}
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={unit === "F"}
                onChange={handleToggle}
                color="primary"
              />
            }
            label={unit === "C" ? "Celsius" : "Fahrenheit"}
          />
        </Box>
        <Dashboard data={selected} unit={unit} />
      </AppLayout>
  );
};

export default Home;
