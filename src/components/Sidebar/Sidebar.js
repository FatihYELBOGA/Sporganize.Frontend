import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const menuItems = [
  { id: 1, label: 'Account', href: '/profile' },
  { id: 2, label: 'My Posts', href: '/MyPosts' },
  { id: 3, label: 'My Appointments', href: '/MyAppointments' },
  { id: 4, label: 'My Friends', href: '/MyFriends' },
  { id: 5, label: 'My Teams', href: '/MyTeams' },
  { id: 6, label: 'My Reservations', href: '/MyReservations' },
  { id: 7, label: 'My Tournaments', href: '/MyTournaments' },
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
          width: '20%',
          boxSizing: 'border-box',
          top: '73px',
          height: '100%',
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
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: location.pathname === item.href ? '#647C31' : 'transparent',
              marginBottom: '20px', 
              '&:hover': {
                backgroundColor: location.pathname === item.href ? '#647C31' : 'rgba(100, 124, 49, 0.5)',
              },
            }}
          >
            <ListItemText primary={item.label} style={{ color: '#000', textAlign: 'center' }} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={handleLogout}
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            marginBottom: '10px',
            '&:hover': {
              backgroundColor: 'rgba(100, 124, 49, 0.5)',
            },
          }}
        >
          <ListItemText primary="Logout" style={{ color: 'darkred', textAlign: 'center', fontWeight: 'bold' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
