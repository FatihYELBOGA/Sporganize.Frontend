import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const menuItems = [
  { id: 1, label: 'Account', href: '/profile' },
  { id: 2, label: 'My Friends', href: '/friends' },
  { id: 3, label: 'My Team', href: '/team' },
  { id: 4, label: 'My Reservation', href: '/reservation' },
  { id: 5, label: 'My Tournaments', href: '/tournaments' },
  { id: 6, label: 'My Appointments', href: '/appointments' },
];

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    console.log("User has logged out.");
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      sx={{
        width: '240px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '260px',
          boxSizing: 'border-box',
          top: '75px',
          backgroundColor: '#E8EAE0',
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.id}
            component={RouterLink}
            to={item.href}
            selected={location.pathname === item.href}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: item.href === '/profile' ? '#9CCC65' : 'transparent',
              '&:hover': {
                backgroundColor: item.href === '/profile' ? '#9CCC65' : '#647C31',
              },
            }}
          >
            <ListItemText primary={item.label} sx={{ color: '#000', textAlign: 'center' }} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={handleLogout}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: '#647C31',
            },
          }}
        >
          <ListItemText primary="Logout" sx={{ color: '#000', textAlign: 'center' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
