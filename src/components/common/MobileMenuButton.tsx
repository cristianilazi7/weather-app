import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Component for the mobile menu button
const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
    <Box position="absolute" top={16} left={16} zIndex={1300}>
      <IconButton onClick={onClick} color="inherit">
        <MenuIcon />
      </IconButton>
    </Box>
  );

  export default MobileMenuButton;