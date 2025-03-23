import { ReactNode, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MobileMenuButton from "../common/MobileMenuButton";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Box bgcolor="background.default" minHeight="100vh">
      <Box
        display="flex"
        minHeight="100vh"
        maxWidth="1200px"
        margin="0 auto"
        px={2}
      >
        {isMobile ? (
          <>
            <MobileDrawer open={drawerOpen} onClose={toggleDrawer} />
            {!drawerOpen && <MobileMenuButton onClick={toggleDrawer} />}
          </>
        ) : (
          <Sidebar />
        )}
        <Box flexGrow={1} p={2} bgcolor="background.default">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
