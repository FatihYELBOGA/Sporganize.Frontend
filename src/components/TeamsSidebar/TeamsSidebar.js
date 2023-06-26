<<<<<<< Updated upstream
import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
=======

import { Drawer, List, ListItem, ListItemText } from '@mui/material';
>>>>>>> Stashed changes
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const menuItems = [
  { id: 1, label: 'Create Team', href: '/Teams' },
  { id: 2, label: 'Join Team', href: '/JoinTeam' },
];
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
const TeamsSidebar = () => {
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
<<<<<<< Updated upstream
=======
            button
>>>>>>> Stashed changes
            key={item.id}
            component={RouterLink}
            to={item.href}
            selected={location.pathname === item.href}
<<<<<<< Updated upstream
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: '8%',
              mt: '10%',
              height: '20%', 
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
=======
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: location.pathname === item.href ? '#647C31' : 'transparent',
              marginBottom: '8%',
              marginTop: '10%',
              height: '20%', 
              '&:hover': {
                backgroundColor: location.pathname === item.href ? '#647C31' : 'rgba(100, 124, 49, 0.5)',
              },
            }}
          >
            <ListItemText primary={item.label} style={{ color: '#000', textAlign: 'center' }} />
>>>>>>> Stashed changes
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default TeamsSidebar;
