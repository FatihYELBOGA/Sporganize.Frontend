import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { id: 1, label: 'Account', href: '/Profile' },
  { id: 2, label: 'My Posts', href: '/MyPosts' },
  { id: 3, label: 'My Appointments', href: '/MyAppointments' },
  { id: 4, label: 'My Friends', href: '/MyFriends' },
  { id: 5, label: 'My Teams', href: '/MyTeams' },
  { id: 6, label: 'My Reservations', href: '/MyReservations' },
  { id: 7, label: 'My Tournaments', href: '/MyTournaments' },
];

const Sidebar = (props) => {

  const { setUserId, setRole } = props;
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(true);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    setUserId(0);
    setRole(null);
    navigate("/");
    console.log("User has logged out.");
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
          width: '20%',
          boxSizing: 'border-box',
          top: '10%',
          height: '100%',
          backgroundColor: '#E8EAE0',
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
              mb: '5%',
              mt: '5%',
              height: '10%',
              '&:hover': {
                backgroundColor: 'rgba(100, 124, 49, 0.5)',
              },
              '&.Mui-selected, &.Mui-selected:hover': {
                backgroundColor: '#647C31',
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
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
        <ListItem
          button
          onClick={handleLogout}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: '5%',
            backgroundColor: 'transparent',
          }}
        >
          <ListItemText primary="Logout" sx={{ color: 'darkred', textAlign: 'center', fontWeight: 'bold' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
