import { Drawer } from "@mui/material";
import Sidebar from "./Sidebar";

type Props = {
  open: boolean;
  onClose: () => void;
};

const MobileDrawer = ({ open, onClose }: Props) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Sidebar />
    </Drawer>
  );
};

export default MobileDrawer;
