import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const menuItems = [
  { id: 1, label: 'Tournaments', href: '/tournaments' },
  { id: 2, label: 'My Tournaments', href: '/my-tournaments' },
];

const TournamentsSidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      sx={{
        width: '20%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '15%',
          boxSizing: 'border-box',
          top: '10%',
          height: '100%',
          backgroundColor: '#f7f7f7',
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            component={RouterLink}
            to={item.href}
            selected={location.pathname === item.href}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: '8%',
              mt: '10%',
              height: '30%', // height has been increased
              '&:hover': {
                backgroundColor: 'green',
                opacity:0.6,
              },
              '&.Mui-selected, &.Mui-selected:hover': {
                backgroundColor: 'green',
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                height: '100%', // height has been increased
                width: '100%',
                backgroundColor: location.pathname === item.href ? '#647C31' : 'transparent',
                zIndex: -1,
              }}
            />
            <ListItemText 
              primary={item.label} 
              sx={{ 
                color: location.pathname === item.href ? '#fff' : '#000', 
                textAlign: 'center',
                '&:hover': {
                  color: '#fff',
                },
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default TournamentsSidebar;
